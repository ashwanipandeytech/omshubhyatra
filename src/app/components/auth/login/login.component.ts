import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="container-fluid bg-white g-0" [style]="{ 'background-image': 'url(' + bgImage + ')' }">
        <div class="row g-0 min-vh-100 align-items-center">
            <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 col-0">

            </div>
            <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 bg-light">
                <div class="row g-0 min-vh-100 align-items-center">
                    <div class="col-12 px-5">
                        <h1 class="display-3 mb-5">Login</h1>

                        <!-- Error Alert -->
                        <div *ngIf="error" class="alert alert-danger alert-dismissible fade show" role="alert">
                            {{ errorMessage }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>

                        <form class="gateway-form" [formGroup]="formGroup" (ngSubmit)="loginAction()">
                            <div class="mb-3">
                                <label for="EmailId" class="form-label">Email address</label>
                                <input type="EmailId" class="form-control" id="EmailId" formControlName="EmailId">
                                <small *ngIf="formGroup.controls['EmailId'].invalid && (formGroup.controls['EmailId'].dirty || formGroup.controls['EmailId'].touched)" class="text-danger">
                                    <small>Please Enter Email Correctly</small>
                                </small>
                                <small *ngIf="formGroup.controls['EmailId'].valid || formGroup.controls['EmailId'].untouched" class="text-muted">
                                    <small>Please Enter Email</small>
                                </small>
                            </div>
                            <div class="mb-3">
                                <label for="Password" class="form-label">Password</label>
                                <input type="Password" class="form-control" id="Password" formControlName="Password">
                                <small *ngIf="formGroup.controls['Password'].invalid && (formGroup.controls['Password'].dirty || formGroup.controls['Password'].touched)" class="text-danger">
                                    <small>Please Enter Password Correctly. Min 6 characters required</small>
                                </small>
                                <small *ngIf="formGroup.controls['Password'].valid || formGroup.controls['Password'].untouched" class="text-muted">
                                    <small>Please Enter Password</small>
                                </small>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
    formGroup: FormGroup;
    bgImage = '/assets/images/theme/slider/slide-5.jpg';
    loginUserData = {};
    error:Boolean;
    errorMessage:String;

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.initLoginForm();
        this.error = false;
    }

    initLoginForm(){
        this.formGroup = new FormGroup({
            EmailId: new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
            Password: new FormControl('', [Validators.required, Validators.minLength(4)])
        });
    }

    loginAction(){
        if(this.formGroup.valid){
            this.authService.loginUser(this.formGroup.value).subscribe(
                result => {
                    // Store User ID
                    localStorage.setItem('userID', result.UserId);
                    // Store User Role
                    localStorage.setItem('roleID', result.RoleId);
                    // Store Name
                    localStorage.setItem('name', result.Name);
                    // Store Email EmailId
                    localStorage.setItem('email', result.EmailId);
                    // Store MobileNo
                    localStorage.setItem('mobile', result.MobileNo);
                    // Store token
                    localStorage.setItem('token', result.token);

                    this.router.navigate(['/admin']);
                },
                error => {
                    this.error = true;
                    this.errorMessage = error.error;
                }
            );
        }
    }
}
