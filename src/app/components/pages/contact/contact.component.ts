import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    
        <div class="row">
            <div class="col-12">
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe width="100%" height="400" id="gmap_canvas"
                                src="https://maps.google.com/maps?q=omshubhyatra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </div>

    <div class="container py-5">
    <div class="row py-5">
        <div class="col-md-4"><h2 class="fadeInUp wow animated delay youplay-section-heading">Contact info</h2>
            <div>
                <table class="table text-black">
                    <tbody><tr>
                        <td class="fadeInUp wow animated delay"><i class="fa fa-phone"></i>
                        </td><td class="fadeInUp wow animated delay">
                        <a href="tel:7611136863" class="text-decoration-none custom-color">
                        +91-7611136863
                        </a>
                    </td></tr><tr>
                        <td class="fadeInUp wow animated delay"><i class="fa fa-envelope"></i>
                        </td><td class="fadeInUp wow animated delay">
                        <a href="mailto:enquiry@omshubhyatra.com" class="text-decoration-none custom-color">
                        enquiry@omshubhyatra.com
                        </a>
                        
                    </td></tr><tr>
                        <td class="fadeInUp wow animated delay"><i class="fa fa-clock"></i>
                        </td><td class="fadeInUp wow animated delay">Mon-Sun, 10am-19pm
                    </td></tr><tr>
                        <td class="fadeInUp wow animated delay"><i class="fa fa-map-marker"></i>
                        </td><td class="fadeInUp wow animated delay">2/342, 2nd Floor, Subhash Nagar, New Delhi, India 110008
                    </td></tr></tbody></table>
            </div>
        </div>
        <div class="col-md-8">
            <div><h2 class="fadeInUp wow animated delay youplay-section-heading"><span style="font-family:inherit;line-height:1.1;letter-spacing:.06em">Have A Query? Let's Talk</span><br>
            </h2>
                <form class="w-100" [formGroup]="formGroup" (ngSubmit)="enquirySubmitAction()">
                    <input type="hidden" class="form-control" id="Source" formControlName="Source" [(ngModel)]="website">
                    <div class="row">

                        <div class="col-md-6 mb-3">
                            <input type="text" class="form-control" id="PersonName" formControlName="PersonName" placeholder="Your Full Name">
                            <small *ngIf="formGroup.controls['PersonName'].invalid && (formGroup.controls['PersonName'].dirty || formGroup.controls['PersonName'].touched)" class="text-danger">
                                <small>Please Enter Name Correctly</small>
                            </small>
                            <small *ngIf="formGroup.controls['PersonName'].valid || formGroup.controls['PersonName'].untouched" class="text-muted">
                                <small></small>
                            </small>
                        </div>

                        <div class="col-md-6 mb-3">
                            <input type="email" class="form-control" id="EmailId" formControlName="EmailId" placeholder="Your Email">
                            <small *ngIf="formGroup.controls['EmailId'].invalid && (formGroup.controls['EmailId'].dirty || formGroup.controls['EmailId'].touched)" class="text-danger">
                                <small>Please Enter Email Correctly</small>
                            </small>
                            <small *ngIf="formGroup.controls['EmailId'].valid || formGroup.controls['EmailId'].untouched" class="text-muted">
                                <small></small>
                            </small>
                        </div>

                        <div class="col-md-6 mb-3">
                            <input type="MobileNo" class="form-control" id="MobileNo" formControlName="MobileNo" placeholder="Your Mobile">
                            <small *ngIf="formGroup.controls['MobileNo'].invalid && (formGroup.controls['MobileNo'].dirty || formGroup.controls['MobileNo'].touched)" class="text-danger">
                                <small>Please Enter Mobile Number Correctly</small>
                            </small>
                            <small *ngIf="formGroup.controls['MobileNo'].valid || formGroup.controls['MobileNo'].untouched" class="text-muted">
                                <small></small>
                            </small>
                        </div>

                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="Departure" formControlName="Departure" placeholder="Departure Location">
                        <small *ngIf="formGroup.controls['Departure'].invalid && (formGroup.controls['Departure'].dirty || formGroup.controls['Departure'].touched)" class="text-danger">
                            <small>Please Enter Valid Departure Location</small>
                        </small>
                        <small *ngIf="formGroup.controls['Departure'].valid || formGroup.controls['Departure'].untouched" class="text-muted">
                            <small></small>
                        </small>
                    </div>

                    <div class="col-md-6 mb-3">
                        <input type="text" class="form-control" id="Destination" formControlName="Destination" placeholder="Enter Destination">
                        <small *ngIf="formGroup.controls['Destination'].invalid && (formGroup.controls['Destination'].dirty || formGroup.controls['Destination'].touched)" class="text-danger">
                            <small>Please Enter Valid Destination</small>
                        </small>
                        <small *ngIf="formGroup.controls['Destination'].valid || formGroup.controls['Destination'].untouched" class="text-muted">
                            <small></small>
                        </small>
                    </div>


                    <div class="col-md-6 mb-3">
                        <input type="number" class="form-control" id="Noper" formControlName="Noper" placeholder="No. Of Persons">
                        <small *ngIf="formGroup.controls['Noper'].invalid && (formGroup.controls['Noper'].dirty || formGroup.controls['Noper'].touched)" class="text-danger">
                            <small>Please Enter Number Of Persons</small>
                        </small>
                        <small *ngIf="formGroup.controls['Noper'].valid || formGroup.controls['Noper'].untouched" class="text-muted">
                            <small></small>
                        </small>
                    </div>

                    <div class="col-md-12 mb-3">
                        <textarea class="form-control" id="Message" rows="3" formControlName="Message" placeholder="Your Message"></textarea>
                    </div>

                    </div>


                    <button type="submit" class="btn btn-primary">Submit Now</button>
                </form>

                <div class="row">
                    <div class="col-sm-12">
                        <p id="successMsg" style="display: none"><strong class="text-success">Thank you for enquiry. We will respons you as soon as possible</strong></p>
                        <p id="errorMsg" style="display: none"><strong class="text-danger">There is something wrong with Server Please try again leter</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>  
    

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
    `.custom-color{
        color: #212529 !important;
      }
  `
  ]
})
export class ContactComponent implements OnInit {
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
            EmailId: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            MobileNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
            Departure: new FormControl('', [Validators.required]),
            Destination: new FormControl('', [Validators.required]),
            Noper: new FormControl('', [Validators.required, Validators.max(99)]),
            Message: new FormControl('', [Validators.required]),
            Source: new FormControl('', [Validators.required])
        });
    }


    enquirySubmitAction(){
        if(this.formGroup.valid){
            this.apiService.submitEnquiry(this.formGroup.value).subscribe(
                result => {
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
