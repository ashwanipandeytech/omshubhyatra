import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../models/category.model';

@Component({
  selector: 'app-category-card',
  template: `
    <div class="category-card-base">
        <div class="deals-item-outer">
            <a [routerLink]="['/category/',  category.CategorySlug]">
                <div class="deals-image">
                    <div class="responsive-image-placeholder">
                        <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-4-3.png">
                        <div class="responsive">
                            <img [src]="rootDomain + category.Image" alt="Image">
                        </div>
                    </div>
                    <div class="package-price px-3">
                        <p class="price-inr-symbol float-start m-0 text-white">
                            <small>Starting From &nbsp;&nbsp; {{ category.StartingPrice | currency: 'INR':'symbol':'1.0-0' }} / Per Person</small> 
                        </p>
                    </div>
                </div>
            </a>
            <div class="deal-content">
                <div class="px-3">
                    <h3 class="card-title mb-3">{{category.CategoryName}}</h3>
                    <p class="mb-4">{{ ((category.Description && category.Description.length > 100) ? category.Description.slice(0,100) : category.Description) + ' ...'}}</p>
                </div>
                <ul class="cat-inc">
                    <li><i class="fas fa-utensils"></i><p>Meals</p></li>
                    <li><i class="fa fa-bed"></i><p>Accommodation</p></li>
                    <li><i class="fas fa-binoculars"></i><p>Sightseeing</p></li>
                </ul>
                <div class="px-3">
                    <a [routerLink]="['/category/',  category.CategorySlug]" class="btn btn-danger rounded-0" title="{{category.CategoryName}}">More Details</a>
                </div> 
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class CategoryCardComponent implements OnInit {
    @Input() category: Category;
    rootDomain = "https://omshubhyatra.in/";

    constructor() {}

    ngOnInit(): void {
        // this.price = this.formatPrice(this.category.StartingPrice);
    }

    formatPrice(price) {
        let priceString = price.toString();
        let lastThree = priceString.substring(priceString.length-3);
        let otherNumbers = priceString.substring(0, priceString.length-3);

        if(otherNumbers != '') lastThree = ',' + lastThree;
        
        return otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    }
}
