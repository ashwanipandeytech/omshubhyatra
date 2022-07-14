import { Component, OnInit, Input } from '@angular/core';
import { Package } from 'src/app/models/package.model';

@Component({
  selector: 'app-package-card-one',
  template: `
    <div class="package-card-one">
        <div class="deals-item-outer">
            <a [routerLink]="['/package/', package.PackageSlug]">
                <div class="deals-image">
                    <div class="responsive-image-placeholder">
                        <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-4-3.png">
                        <div class="responsive">
                            <div class="package-code" *ngIf="package.Code">{{package.Code}}</div>
                            <img [src]="mainImage" alt="Image">
                        </div>
                    </div>
                    <span class="deal-price price-inr-symbol">
                        <span class="pt-2">{{ package.Price | currency: 'INR':'symbol':'1.0-0' }}</span>
                        <small>/- Per Person</small>
                    </span>
                </div>
            </a>
            <div class="deal-content">
                <div class="deal-rating pb-3">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-o"></span>
                </div>
                <div class="px-3">
                    <h5 class="pack-title">{{package.Title}}</h5>

                    <table class="ex-duration my-3">
                        <tr>
                            <td class="pak-duration">{{package.NoOfDays}} Days / {{package.NoOfDays-1}} Nights</td>
                            <td class="text-end">- Ex. {{package.Executed}}</td>
                        </tr>
                    </table>
                </div>

                <p class="pack-ext px-3"><b>{{package.Extensions}}</b></p>

                <div class="px-3">
                    <p style="text-align:justify">{{package.Description.slice(0,180) + ' ...'}}</p>
                </div>

                <ul class="cat-inc">
                    <li><i class="fas fa-utensils"></i><p>Meals</p></li>
                    <li><i class="fa fa-bed"></i><p>Accommodation</p></li>
                    <li><i class="fas fa-binoculars"></i><p>Sightseeing</p></li>
                </ul>

                <a [routerLink]="['/package/', package.PackageSlug]" class="btn btn-danger rounded-0" title="{{package.Title}}">More Details</a>
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class PackageCardOneComponent implements OnInit {
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
