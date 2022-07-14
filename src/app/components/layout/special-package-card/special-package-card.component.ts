import { Package } from '../../../models/package.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-package-card',
  template: `
    <div class="deals-item">
        <div class="deals-item-outer">
            <div class="deals-image">
                <div class="responsive-image-placeholder">
                    <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-4-3.png">
                    <div class="responsive">
                        <img [src]="mainImage" alt="Image">
                    </div>
                </div>
                <span class="deal-price price-inr-symbol">
                    <span class="pt-2">{{ package.Price | currency: 'INR':'symbol':'1.0-0' }}</span>
                    <br/>
                    <small>Per Person</small>
                </span>
            </div>
            <div class="deal-content">
                <div class="deal-rating">
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star checked"></span>
                    <span class="fas fa-star"></span>
                    <span class="far fa-star"></span>
                </div>
                <h3 class="card-title">{{package.Title}}</h3>
                <p>{{package.Description.slice(0,100) + ' ...'}}</p>
                <div class="px-3">
                    <a [routerLink]="['/package/',  package.PackageSlug]" class="btn btn-danger rounded-0" title="{{package.Title}}">More Details</a>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class SpecialPackageCardComponent implements OnInit {
    @Input() package: Package;
    mainImage:string;

    constructor() { }

    ngOnInit(): void {
        for (const ImageObj in this.package.Images) {
            if (Object.prototype.hasOwnProperty.call(this.package.Images, ImageObj)) {
                const ImageElement = this.package.Images[ImageObj];
                this.mainImage = "https://omshubhyatra.in/" + ImageElement['Image'];
            }
        }
    }
}
