import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-enquiry-sidebar',
  templateUrl: './enquiry-sidebar.component.html',
  styles: [
    ` 
    @media only screen and (max-width:400px) {
    .setheight{
      height:320px;
      overflow-y:scroll;

    } }`
  ],


})
export class EnquirySidebarComponent implements OnInit {
  formGroup: FormGroup;
  enquiryFromData = {};
  error:Boolean;
  errorMessage:String;
  isActive:boolean;
    website:string="website";

  constructor(private apiService: ApiService, private router: Router) { 
 

  }

  ngOnInit(): void {
    this.initEnquiryForm();
    this.isActive = false;
  
  }
  
  initEnquiryForm(){
      this.formGroup = new FormGroup({
          PersonName: new FormControl('', [Validators.required, Validators.minLength(4)]),         
          MobileNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
          EmailId: new FormControl('', Validators.compose([Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])),
        //  Departure: new FormControl('', [Validators.required]),
          Destination: new FormControl('', [Validators.required]),
        //  Noper: new FormControl('', [Validators.required, Validators.max(99)]),
          Message: new FormControl('', [Validators.required]),
          Source: new FormControl('', [Validators.required])
      });

    
  }
  setEmailNonMandatory(){    
    this.formGroup.controls['EmailId'].markAsTouched();
  }
  enquirySubmitAction(){
    console.info('test',this.formGroup.value.EmailId=='')
      if(this.formGroup.valid){
          this.apiService.submitEnquiry(this.formGroup.value).subscribe(
              result => {
                  /*$('#enquiryFormSuccessMessage').show();
                  $('#enquirySubmitForm').hide();*/
                  this.router.navigate(["/"]).then(result=>{window.location.href = 'https://omshubhyatra.in/thankyou/'+this.formGroup.value.Destination;});
              },
              error => {
                  this.error = true;
                  console.info(error.error)
                  this.errorMessage = error.error;
              }
          );
      }
  }
}
