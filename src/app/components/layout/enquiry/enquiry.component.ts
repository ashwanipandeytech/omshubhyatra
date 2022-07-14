import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styles: []
})

export class EnquiryComponent implements OnInit {
    formGroup: FormGroup;
    enquiryFromData = {};
    error:Boolean;
    errorMessage:String;
    isActive:boolean;
    website:string="website";

    constructor(
        private apiService: ApiService,
        private router: Router){}

    ngOnInit(): void {
        this.initEnquiryForm();
        this.isActive = false;
    }

    initEnquiryForm(){
        this.formGroup = new FormGroup({
            PersonName: new FormControl('', [Validators.required, Validators.minLength(4)]),
            EmailId: new FormControl('', [ Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            MobileNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
           // Departure: new FormControl('', [Validators.required]),
            Destination: new FormControl('', [Validators.required]),
           // Noper: new FormControl('', [Validators.required, Validators.max(99)]),
            Message: new FormControl('', [Validators.required]),
            Source: new FormControl('', [Validators.required])
        });
    }
    setEmailNonMandatory(){    
        this.formGroup.controls['EmailId'].markAsTouched();
      }
    enquirySubmitAction(){
        if(this.formGroup.valid){
            this.apiService.submitEnquiry(this.formGroup.value).subscribe(
                result => {
                    /*$('#enquiryFormBase').hide();
                    $('#enquiryFormSuccessMessage').show();*/
                  this.router.navigate(["/"]).then(result=>{window.location.href = 'https://omshubhyatra.in/thankyou/'+this.formGroup.value.Destination;});
                },
                error => {
                    this.error = true;
                    this.errorMessage = error.error;
                }
            );
        }
    }


    toggleEnquiryForm(){
        let enquiryContainer = $('.floating-enquiry');
        if(enquiryContainer.hasClass('active')){
            enquiryContainer.removeClass('active');
            this.isActive = false;
        } else {
            enquiryContainer.addClass('active');
            this.isActive = true;
        }
    }
}
