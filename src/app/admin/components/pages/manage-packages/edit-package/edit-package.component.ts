import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Category } from 'src/app/models/category.model';
import { Package } from 'src/app/models/package.model';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-package',
  templateUrl: './edit-package.component.html',
  styles: [
  ]
})
export class EditPackageComponent implements OnInit {
    package : Observable<Package>;
    uploadImage: Boolean;
    categories: Category[];
    CategoryIdDefaultValue: Number;
    imageUploadForm: FormGroup;
    imageSrc: any;
    imgs : any;
    strtDate : Date;

    editPackageForm: FormGroup;

    error: Boolean;
    errorMessage: String;
    packageId: String;

    constructor(private apiService: ApiService, private adminApiService: AdminService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.apiService.getAllCategories().subscribe(response => {
            this.categories = response;
            this.CategoryIdDefaultValue = 0;
        });
        this.packageId  = this.route.snapshot.paramMap.get('_id');
        this.initEditPackageForm();
        this.intiImageUploadForm();
        this.error = false;
        this.uploadImage = false;
    }

    intiImageUploadForm() {
        this.imageUploadForm = new FormGroup({
            Image: new FormControl('', [Validators.required]),
            FileSource: new FormControl('')
        });
    }

    initEditPackageForm() {
        this.editPackageForm = new FormGroup({
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
        let token = localStorage.getItem('token');
        this.adminApiService.getPackageById(token, this.packageId).subscribe(response => {
            this.imgs = response['Images'];
            this.imageSrc = this.imgs[0].Image;
            this.strtDate = new Date(response.StartDate);
            this.editPackageForm.patchValue(response);
        });  
    }

    editPackageAction() {
        if (this.editPackageForm.valid) {
            if(this.uploadImage) {
                this.imageUpload()
            }
            else {
                this.editPackageForm.patchValue({
                    Image: $('#ImageUrl').val().toString()
                });

                this.editPackage();
            }
        } else {
            this.editPackageForm.markAsTouched();
            this.error = true;
            this.errorMessage = 'Form Validation Error';
        }
    }

    editPackage() {
        // Get Stored token
        let token = localStorage.getItem('token');
        if(!this.editPackageForm.value.Image){
            this.editPackageForm.value.Image = this.imageSrc;
        }
        this.adminApiService.editPackage(this.editPackageForm.value, token, this.packageId).subscribe(
            result => {
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
                        this.editPackageForm.patchValue({
                            Image: result.body.toString()
                        });

                        this.editPackage();
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
            this.uploadImage = true;
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
