import { Package } from './../../../models/package.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: [
  ]
})
export class FeedbackComponent implements OnInit {
    packages: Package[];

    formGroup: FormGroup;
    enquiryFromData = {};
    error:Boolean;
    errorMessage:String;

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
        this.initFeedbackForm();
        this.error = false;

        this.apiService.getAllPackages().subscribe(response => {
            this.packages = response;
            this.formGroup.patchValue({
                PackageSelected: 0
            });
        });
    }

    initFeedbackForm(){
        this.formGroup = new FormGroup({
            PersonName:     new FormControl('', [Validators.required, Validators.minLength(4)]),
            EmailId:        new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            MobileNo:       new FormControl('', [Validators.required, Validators.minLength(10)]),
            NoofPersons:    new FormControl('', [Validators.required, Validators.pattern(/[1-9]/)]),
            PackageSelected:new FormControl('', [Validators.required]),
            PackageId:      new FormControl('', [Validators.required]),
            PackageName:    new FormControl('', [Validators.required]),
            JourneyDate:    new FormControl('', [Validators.required]),
            Message:        new FormControl('', [Validators.required])
        });
    }

    feedbackSubmitAction(){
        this.setSelectedPackage();

        if(this.formGroup.valid){
            this.apiService.submitFeedback(this.formGroup.value).subscribe(
                result => {
                    this.router.navigate(['/thankyou']);
                },
                error => {
                    this.error = true;
                    this.errorMessage = 'Please fill form completely!';
                }
            );
        }
    }

    setSelectedPackage(){
        this.apiService.getPackageBySlug($('#PackageSelected').val()).subscribe(response => {
            this.formGroup.patchValue({
                PackageId: response['PackageId'],
                PackageName: response['Title']
            });
        });
    }
}
