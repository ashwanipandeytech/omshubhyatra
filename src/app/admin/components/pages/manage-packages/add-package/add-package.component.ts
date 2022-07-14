import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styles: [
  ]
})
export class AddPackageComponent implements OnInit {
    uploadImage: Boolean;
    categories: Category[];
    CategoryIdDefaultValue: Number;
    imageUploadForm: FormGroup;
    imageSrc: any;

    addPackageForm: FormGroup;

    error: Boolean;
    errorMessage: String;

    constructor(private apiService: ApiService, private adminApiService: AdminService, private router: Router) {}

    ngOnInit(): void {
        this.initAddPackageForm();
        this.intiImageUploadForm();
        this.error = false;
        this.uploadImage = true;

        this.apiService.getAllCategories().subscribe(response => {
            this.categories = response;
            this.CategoryIdDefaultValue = 0;
        });
    }

    intiImageUploadForm() {
        this.imageUploadForm = new FormGroup({
            Image: new FormControl('', [Validators.required]),
            FileSource: new FormControl('')
        });
    }

    initAddPackageForm() {
        this.addPackageForm = new FormGroup({
            Code: new FormControl('', [Validators.required, Validators.minLength(6)]),
            Title: new FormControl('', [Validators.required, Validators.minLength(6)]),
            PackageSlug: new FormControl('', [Validators.required, Validators.minLength(6)]),
            StartDate: new FormControl('', [Validators.required]),
            CategoryId: new FormControl('', [Validators.required, Validators.pattern(/[1-9]/)]),
            Price: new FormControl('', [Validators.required]),
            NoOfDays: new FormControl('', [Validators.required]),
            Inclusions: new FormControl('', [Validators.required, Validators.minLength(2)]),
            Exclusions: new FormControl('', [Validators.required, Validators.minLength(2)]),
            Extensions: new FormControl('', [Validators.required, Validators.minLength(2)]),
            Executed: new FormControl('', [Validators.required, Validators.minLength(2)]),
            Description: new FormControl('', [Validators.required]),
            Type: new FormControl('', [Validators.required, Validators.pattern(/[1-9]/)]),
            Image: new FormControl('')
        });
    }

    addPackageAction() {
        if (this.addPackageForm.valid) {
            if(this.uploadImage) {
                this.imageUpload()
            }
            else {
                this.addPackageForm.patchValue({
                    Image: $('#ImageUrl').val().toString()
                });

                this.addPackage();
            }
        } else {
            this.addPackageForm.markAsTouched();
            this.error = true;
            this.errorMessage = 'Form Validation Error';
        }
    }

    addPackage() {
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.addPackage(this.addPackageForm.value, token).subscribe(
            result => {
                //console.log(result);
                if(result.success){
                    Swal.fire({
                        position: 'top-end',  
                        icon: 'success',  
                        title: 'Package Created!',  
                        showConfirmButton: false,  
                        timer: 1500
                    }); 
                    setTimeout(() => {
                        this.router.navigate(['/admin/packages']);
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

    resetError() {
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
                        this.addPackageForm.patchValue({
                            Image: result.body.toString()
                        });

                        this.addPackage();
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

    enableDisableImageUploadAction(){
        if($('#enableUpload').prop('checked')){
            $('#uploadImageCard').show();
            $('#uploadUrlCard').hide();
            this.uploadImage = true;
        } else {
            $('#uploadImageCard').hide();
            $('#uploadUrlCard').show();
            this.uploadImage = false;
        }
    }
}
