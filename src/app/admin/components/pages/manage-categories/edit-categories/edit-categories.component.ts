import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 

import { AdminService } from 'src/app/admin/services/admin.service';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-categories',
  templateUrl: `./edit-categories.component.html`,
  styles: [
  ]
})
export class EditCategoriesComponent implements OnInit {
    category : Observable<Category>;
    uploadImage: Boolean;
    imageUploadForm: FormGroup;
    imageSrc: any;
    catKeys: any;

    editCategoryFrom: FormGroup;
    keysOptions: Array<any> =[
        {name: "New", value: 'New'},
        {name: 'Popular', value: 'Popular'},
        {name: "Special", value: 'Special'},
        {name: "Domestic", value: 'Domestic'},
        {name: "Pilgrimage", value: 'Pilgrimage'},
        {name: "International", value: 'International'},
        {name: "Fixed-Departure", value: 'Fixed-Departure'}
    ];

    error:Boolean;
    errorMessage:String;
    categoryId: string;

    constructor(private adminApiService: AdminService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.categoryId  = this.route.snapshot.paramMap.get('categoryId');
        this.initEditCategoryForm();
        this.intiImageUploadForm();
        this.error = false;
        this.uploadImage = false;            
    }

    intiImageUploadForm() {
        this.imageUploadForm = new FormGroup({
            Image: new FormControl(''),
            FileSource: new FormControl('')
        });
    }

    initEditCategoryForm(){
        this.editCategoryFrom = new FormGroup({
            CategoryName: new FormControl('', [Validators.required, Validators.minLength(6)]),
            CategorySlug: new FormControl('', [Validators.required, Validators.minLength(6)]),
            StartingPrice: new FormControl('', [Validators.required]),
            Keys: new FormArray([]),
            Description: new FormControl(''),
            Image: new FormControl('')
        });
        let token = localStorage.getItem('token');
        this.adminApiService.getCategoryById(token, this.categoryId).subscribe(response => {
            this.editCategoryFrom.patchValue(response[0], this.imageSrc = response[0].Image);
            this.catKeys = response[0]['Keys'];

            this.catKeys.forEach((k) => {
                $('#key-popular-' + k.Key.toLowerCase()).prop('checked',true);
            });
        });
    }

    editCategoryAction(){
        if (this.editCategoryFrom.valid) {
            if(this.uploadImage) {
                this.imageUpload()
            }
            else {
                this.editCategoryFrom.patchValue({
                    Image: $('#ImageUrl').val().toString()
                });

                this.editCategory();
            }
        } else {
            this.editCategoryFrom.markAsTouched();
            this.error = true;
            this.errorMessage = 'Form Validation Error';
        }
    }

    editCategory(){
        // Get Stored token
        let token = localStorage.getItem('token');
        if(!this.editCategoryFrom.value.Image){
            this.editCategoryFrom.value.Image = this.imageSrc;
        }
        this.adminApiService.editCategory(this.editCategoryFrom.value, token, this.categoryId).subscribe(
            result => {
                if(result.success){
                    Swal.fire({
                        position: 'top-end',  
                        icon: 'success',  
                        title: 'Category Created!',  
                        showConfirmButton: false,  
                        timer: 1500
                    }); 
                    setTimeout(() => {
                        this.router.navigate(['/admin/categories']);
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
                        this.editCategoryFrom.patchValue({
                            Image: result.body.toString()
                        });

                        this.editCategory();
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

    checkboxAction(event){
        const formArray: FormArray = this.editCategoryFrom.get('Keys') as FormArray;

        /* Selected */
        if(event.target.checked){
            // edit a new control in the arrayForm
            formArray.push(new FormControl(event.target.value));
        }
        /* unselected */
        else{
            // find the unselected element
            let i: number = 0;

            formArray.controls.forEach((ctrl: FormControl) => {
                if(ctrl.value == event.target.value) {
                    formArray.removeAt(i);
                    return;
                }

                i++;
            });
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
