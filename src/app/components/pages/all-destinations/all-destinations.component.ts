import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destination.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-destinations',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Explore All Destinations'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container py-5">
        <div class="row">
            <div class="col-12 pt-5">
                <div class="blob mx-auto text-center">
                    <h2 class="m-0 display-6 text-uppercase">Our Destinations</h2>
                    <div class="divider pt-4 mb-4">
                        <i class="fas fa-spa"></i>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit..</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container py-5">
        <div class="row justify-content-center py-5">
            <app-destination-card
                class="col-lg-3 col-md-4 col-6 mb-5"
                *ngFor="let destination of destinations"
                [destination]="destination"
            ></app-destination-card>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class AllDestinationsComponent implements OnInit {
    destinations:Destination[];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getAllDestinations().subscribe(response => {
            this.destinations = response;
        });
    }
}
