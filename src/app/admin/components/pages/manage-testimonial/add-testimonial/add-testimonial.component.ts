import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-add-testimonial',
  templateUrl: './add-testimonial.component.html',
  styles: [
  ]
})
export class AddTestimonialComponent implements OnInit {
    uploadImage: Boolean;
    imageUploadForm: FormGroup;
    imageSrc: any;
    addTestimonialFrom: FormGroup;
    error:Boolean;
    errorMessage:String;

    constructor(private adminApiService: AdminService, private router: Router) {}

    ngOnInit(): void {
        this.initAddTestimonialForm();
        this.intiImageUploadForm();
        this.error = false;
        this.uploadImage = true;
    }

    intiImageUploadForm() {
        this.imageUploadForm = new FormGroup({
            Image: new FormControl(''),
            FileSource: new FormControl('')
        });
    }

    initAddTestimonialForm(){
        this.addTestimonialFrom = new FormGroup({
            Name: new FormControl(''),
            Address: new FormControl(''),
            Testimonial: new FormControl(''),
            Image: new FormControl('')
        });
    }

    addTestimonialAction(){
        if (this.addTestimonialFrom.valid) {
            if(this.uploadImage) {
                this.imageUpload()
            }
            else {
                this.addTestimonialFrom.patchValue({
                    Image: $('#ImageUrl').val().toString()
                });

                this.addTestimonial();
            }
        } else {
            this.addTestimonialFrom.markAsTouched();
            this.error = true;
            this.errorMessage = 'Form Validation Error';
        }
    }

    addTestimonial(){
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.addTestimonial(this.addTestimonialFrom.value, token).subscribe(
            result => {
                if(result.success){
                    Swal.fire({
                        position: 'top-end',  
                        icon: 'success',  
                        title: 'Testimonial Created!',
                        showConfirmButton: false,  
                        timer: 1500
                    }); 
                    setTimeout(() => {
                        this.router.navigate(['/admin/testimonial']);
                    }, 1800);
                }
                this.error = false;
            },
            error => {
                this.error = true;
                this.errorMessage = error.error;
            }
        );
    }

    resetError(){
        this.error = false;
        this.errorMessage = '';
    }

    imageUpload() {
        // Get Stored token
        let token = localStorage.getItem('token');

        if (this.imageUploadForm.valid) {
            var formData = new FormData();
            formData.append('Image', this.imageUploadForm.get('FileSource').value);

            this.adminApiService.uploadImage(formData, token).subscribe(
                result => {
                    if (result.type === HttpEventType.Response) {
                        this.addTestimonialFrom.patchValue({
                            Image: result.body.toString()
                        });

                        this.addTestimonial();
                    }

                    if (result.type === HttpEventType.UploadProgress) {
                        const percentDone = Math.round(100 * result.loaded / result.total);
                        //console.log('Progress ' + percentDone + '%');
                    }
                },
                error => {
                    this.error = true;
                    this.errorMessage = error.error;
                }
            );
        } else {
            this.imageUploadForm.markAsTouched();
            this.error = true;
            this.errorMessage = 'Image not selected! Please select the image.';
        }
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];

            this.imageUploadForm.patchValue({
                FileSource: file
            });

            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(file);
        }
    }
}