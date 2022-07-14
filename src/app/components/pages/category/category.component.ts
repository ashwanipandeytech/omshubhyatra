import { ActivatedRoute,Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { Package } from './../../../models/package.model';

@Component({
    selector: 'app-category',
    template: `
        <!-- App Top Navigation -->
        <app-top-navigation></app-top-navigation>

        <app-header-banner [title]=" categoryName " [bgImage]=" categoryImage "></app-header-banner>

        <div class="container py-5 mt-5">
            <div class="row">
                <div class="col-12">
                    <h1 class="mb-4">{{ categoryName }}</h1>
                    <p>{{ categoryDescription }}</p>
                </div>
            </div>
        </div>

        <div class="container py-5 mb-5">
            <div class="row justify-content-center">
                <app-package-card-one
                        class="col-lg-4 col-md-6 col-12"
                        *ngFor="let package of packages"
                        [package]="package"
                ></app-package-card-one>
            </div>
        </div>

        <!-- footer -->
        <app-footer></app-footer>
    `,
    styles: [
    ]
})
export class CategoryComponent implements OnInit {
    packages: Package[];

    categoryName: string;
    categorySlug: string;
    categoryImage: string;
    categoryDescription: string;


    constructor(private route: ActivatedRoute, private apiService: ApiService,private router:Router) { }

    ngOnInit(): void {
        this.categorySlug  = this.route.snapshot.paramMap.get('categorySlug');

        this.apiService.getAllCategories().subscribe(response => {
            if(response.findIndex(item=>item.CategorySlug== this.categorySlug)<0){
                this.router.navigateByUrl('/404');
               
            }
            else{
                for (const key in response) {
                    if (Object.prototype.hasOwnProperty.call(response, key)) {
                        const element = response[key];
    
                        if(element.CategorySlug == this.categorySlug){
                            this.apiService.getPackagesByCategory(element.CategoryId).subscribe(response => {
                                this.packages = response;
                                this.categoryName = element.CategoryName;
                                this.categoryImage = 'https://omshubhyatra.in/' + element.Image;
                                this.categoryDescription = element.Description;
                                
                            });
                         
                        }
                    }
                }
            }
           

           
        });
    }
}
