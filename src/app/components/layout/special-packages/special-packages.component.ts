import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-packages',
  template: `
    <div class="special-package-section" [ngStyle]="{ 'background-image': 'url(' + bgImage + ')' }">
        <div class="back-filter">
            <div class="container py-5">
                <div class="row py-5">
                    <div class="col-12">
                        <div class="blob light mx-auto text-center">
                            <h2 class="m-0 display-6 text-uppercase text-white">Last Minute Deals</h2>
                            <div class="divider pt-4 mb-4">
                                <i class="fas fa-spa"></i>
                            </div>
                            <p class="text-white">Time to get away? Take advantage of our last-minute deals on packages.</p>
                        </div>
                    </div>
                </div>

                <app-special-package-carousal [packages]="packages"></app-special-package-carousal>
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class SpecialPackagesComponent implements OnInit {
    @Input() bgImage:string;
    @Input() packages:any;

    constructor() { }

    ngOnInit(): void {
    }
}
