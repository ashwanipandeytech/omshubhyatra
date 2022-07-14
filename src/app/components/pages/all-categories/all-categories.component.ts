import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-categories',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Explore All Categories'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container py-5">
        <div class="row">
            <div class="col-12 pt-5">
                <div class="blob mx-auto text-center">
                    <h2 class="m-0 display-6 text-uppercase">Our Categories</h2>
                    <div class="divider pt-4 mb-4">
                        <i class="fas fa-spa"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                </div>
            </div>
        </div>
    </div>

    <app-category-carousal [categories]="categories"></app-category-carousal>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AllCategoriesComponent implements OnInit {
    categories:Category[];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getAllCategories().subscribe(response => {
            this.categories = response;
        });
    }
}
