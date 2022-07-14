import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Package } from 'src/app/models/package.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-search-result',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>
    <app-header-banner [title]="'Search Result'" [bgImage]="imageSrc"></app-header-banner>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-12 py-5">
                <form action="search">
                <div class="widgets-container">
                    <div class="widget pt-5">
                        <h3><i class="fas fa-umbrella-beach me-2"></i> Package Type</h3>
                        <select name="Category" id="custom-select-2" class="selectpicker form-control" tabindex="-98" (change)="loadExecution()" required>
                        <option *ngFor="let category of categories" value="{{category.CategoryId}}" [selected]="category.CategoryId.toString() == type">{{category.CategoryName}}</option>
                        </select>
                    </div>
                    <div class="widget pt-5">
                        <h3><i class="fas fa-map-marked-alt me-2"></i> Destination</h3>
                        <select name="execution_city" id="custom-select-1" class="selectpicker form-control" tabindex="-98" required>
                        <option *ngFor="let city of cities" value="{{city}}" [selected]="city == dest">{{city}}</option>
                        </select>
                    </div>
                    <div class="widget pt-5">
                        <h3><i class="fas fa-calendar-alt me-2"></i> No of Days</h3>
                        <select name="days" id="custom-select-3" class="selectpicker form-control" tabindex="-98" required>
                            <option value="3">3 Days / 2 Nights</option>
                            <option value="4">4 Days / 3 Nights</option>
                            <option value="5">5 Days / 4 Nights</option>
                            <option value="6">6 Days / 5 Nights</option>
                            <option value="7">7 Days / 6 Nights</option>
                            <option value="8">8 Days / 7 Nights</option>
                            <option value="9">9 Days / 8 Nights</option>
                            <option value="10">10 Days / 9 Nights</option>
                            <option value="11">11 Days / 10 Nights</option>
                            <option value="12">12 Days / 11 Nights</option>
                        </select>
                    </div>
                    <div class="widget pt-5">
                        <h3><i class="fas fa-rupee-sign me-2"></i> Price</h3>
                        <select name="price" id="custom-select-4" class="selectpicker form-control" tabindex="-98" required>
                            <option value=""> Budget per person </option>
                            <option value="20000"> Less than ₹20,000 </option>
                            <option value="50000"> ₹20,000 to ₹50,000 </option>
                            <option value="100000"> ₹50,000 to ₹1 Lac </option>
                            <option value="200000">  ₹1 Lac to ₹2 Lac </option>
                        </select>
                    </div>
                    <div class="widget pt-5">
                        <button type="submit" href="#" class="btn btn-danger rounded-0">SEARCH</button>
                    </div>
                </div>
                </form>
            </div>            
            <div class="col-lg-9 col-md-8 col-12 py-5 ps-md-3">
                <table class="serp-card bg-light w-100" *ngFor="let package of packages">
                    <tr>
                        <td style="width: 200px;" class="d-md-block d-sm-none">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-1-1.png">
                                <div class="responsive">
                                    <img *ngIf="package.Image" alt="Image" [src]="package.Image">
                                </div>
                            </div>
                        </td>
                        <td class="">
                            <div class="row">
                                <div class="col-6 title-div">
                                    <a [routerLink]="['/package/', package.PackageSlug]"><h5><b>{{package.Title}}</b></h5></a>                                    
                                </div>
                                <div class="col-3 days-div">
                                    {{package.NoOfDays-1}} Nights  {{package.NoOfDays}} Days
                                </div>
                                <div class="col-3 days-div r-brdr">
                                    <p class="mb-0">Ex-{{package.Executed}} </p>
                                </div>
                                <div class="col-9">
                                    <p class="mb-0">{{package.Description}}</p>
                                </div>
                                <div class="col-3 l-r-brdr">
                                    <h4><i class="fas fa-rupee-sign"> <b> {{package.Price}} /-</b></i></h4>
                                    Starting price
                                </div>
                                <div class="col-9 ext-div">
                                    <p class="mb-0">{{package.Extensions}}</p>
                                </div>
                                <div class="col-3 days-div r-brdr">
                                    <a class="btn btn-danger rounded-0" ng-reflect-router-link="/package/,kedarnath-tour-packa" [routerLink]="['/package/', package.PackageSlug]">VIEW DETAILS</a>
                                </div>
                            </div>                            
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class SearchResultComponent implements OnInit {
    dest:string;
    type:string;
    day:string;
    price:string;
    imageSrc: any;
    imgs : any;
    categories:Category[];
    cities: any;

    packages:Package[];

    constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) { }

    renderSearchResult(){
        this.apiService.getSearchResults(
            this.dest,
            this.type,
            this.day,
            this.price
        ).subscribe(response => {
            this.packages = response;
            this.imgs = response[0]['Images'];
            this.imageSrc = this.imgs[0].Image;
        });
    }

    ngOnInit(): void {
        // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
        this.activatedRoute.queryParams.subscribe(params => {
            this.dest = params['execution_city'];
            this.type = params['Category'];
            this.day = params['days'];
            this.price = params['price'];
            this.apiService.getAllCategories().subscribe(response => {
                this.categories = response;
            });
            this.renderSearchResult();
            this.loadExecution();
        });
    }

    loadExecution(){
        let selected_category = $('#custom-select-2').val();
        //console.log(selected_category)
        if(!selected_category) selected_category = this.type;
        this.apiService.getExecutionCities(selected_category).subscribe(response => {
            this.cities = response;
        });
        $('#custom-select-3').val(this.day);
        $('#custom-select-4').val(this.price);
    }
}
