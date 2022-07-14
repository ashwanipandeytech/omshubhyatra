import { Component, Input, OnInit } from '@angular/core';
import { Destination } from './../../../models/destination.model';

@Component({
  selector: 'app-destination-card',
  template: `
    <div class="rounded-3 shadow overflow-hidden">
        <div class="responsive-image-placeholder">
            <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-4-3.png">
            <div class="responsive">
                <img [src]=" featuredImage " alt="Image">
            </div>
            <span class="popular rounded-pill px-4 my-3 text-white text-uppercase">
                Popular
            </span>
        </div>
        <h4 class="bg-secondary m-0 py-2 text-center fw-normal">
            <a class="text-decoration-none text-light m-0" [href]=" destinationUrl " title="{{ destination.DestinationName }}">{{ destination.DestinationName }} <i class="fas fa-arrow-alt-circle-right"></i></a>
        </h4>
    </div>
  `,
  styles: [
  ]
})
export class DestinationCardComponent implements OnInit {
    @Input() destination: Destination;
    rootDomain = "https://omshubhyatra.in/";
    destinationUrl: string;
    featuredImage: string;

    constructor() { }

    ngOnInit(): void {
        this.featuredImage = this.rootDomain + this.destination.Image;
        this.destinationUrl = '/destination/' + this.destination.DestinationSlug;
    }
}
