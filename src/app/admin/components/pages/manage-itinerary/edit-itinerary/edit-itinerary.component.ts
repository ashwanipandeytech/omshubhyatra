import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'; 

import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-edit-itinerary',
  templateUrl: './edit-itinerary.component.html',
  styles: [
  ]
})
export class EditItineraryComponent implements OnInit {
  uploadImage: Boolean;
addItineraryForm: FormGroup;
_id: String;
packageID: String;

packageName: String;

imageUploadForm: FormGroup;
imageSrc: any;

error:Boolean;
errorMessage:String;

constructor(private route: ActivatedRoute, private adminApiService: AdminService, private router: Router) {}

ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('_id');
    this.initAddItineraryForm();
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

initAddItineraryForm(){
    this.addItineraryForm = new FormGroup({
      PackageId:    new FormControl(''),
      Day:          new FormControl('', [Validators.required]),
      Cities:       new FormControl('', [Validators.required]),
      Distance:     new FormControl('', [Validators.required]),
      Description:  new FormControl('', [Validators.required, Validators.minLength(100)]),
      Image:        new FormControl(''),
    });
    let token = localStorage.getItem('token');
    this.adminApiService.getItineraryById(token, this._id).subscribe(response => {
      this.imageSrc = response.Image;
      this.packageID = response.PackageId.toString();
        this.addItineraryForm.patchValue(response);
        
        this.adminApiService.GgetPackageByPackageId(token, this.packageID).subscribe(r => {
          this.packageName = r.Title.toString();
        });

    });
}

addItineraryAction(){
  if (this.addItineraryForm.valid) {
      if(this.uploadImage) {
          this.imageUpload();
      }
      else {
          this.addItineraryForm.patchValue({
              Image: $('#ImageUrl').val().toString()
          });
          this.addItinerary();
      }
  } else {
      this.addItineraryForm.markAsTouched();
      this.error = true;
      this.errorMessage = 'Form Validation Error';
  }
}

addItinerary(){
    // Get Stored token
    let token = localStorage.getItem('token');
    if(!this.addItineraryForm.value.Image){
        this.addItineraryForm.value.Image = this.imageSrc;
    }
    this.adminApiService.editItinerary(this.addItineraryForm.value, token, this._id).subscribe(
        result => {
            if(result.success){
                Swal.fire({
                    position: 'top-end',  
                    icon: 'success',  
                    title: 'Itinerary Updated!',  
                    showConfirmButton: false,  
                    timer: 1500
                }); 
                setTimeout(() => {
                    this.router.navigate(['/admin/itinerary/' + this.packageID + '/manage']);
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
                    this.addItineraryForm.patchValue({
                        Image: result.body.toString()
                    });

                    this.addItinerary();
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