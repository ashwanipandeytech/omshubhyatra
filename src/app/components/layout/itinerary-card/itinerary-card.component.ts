import { Component, OnInit, Input } from '@angular/core';
import { Itinerary } from 'src/app/models/itinerary.model';

@Component({
    selector: 'app-itinerary-card',
    template: `
        <div class="row align-items-center mb-3">
            <div class="col-lg-2 col-12">
                <div class="itinerary-media">
                    <div class="responsive-image-placeholder rounded">
                        <img class="ar-placeholder" src="/assets/images/theme/aspect-ratio-placeholder/ar-1-1.png">
                        <div class="responsive">
                            <img [src]="itinerary.Image" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-10 col-12">
                <div class="row align-items-start mb-lg-3 my-md-3 mb-3">
                    <div class="col-md-7 col-12 mt-md-0 mt-3">
                        <table class="itinerary-table rounded overflow-hidden">
                            <tr>
                                <td>
                                    {{ itinerary.Cities }}
                                </td>
                                <td>
                                    From : DAY-{{ itinerary.Day }}
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="col-md-5 col-12 my-md-0 my-3">
                        <div class="text-md-end text-center">
                            <small class="text-primary"><i class="fa fa-hourglass" aria-hidden="true"></i> {{ itinerary.Distance }} <i class="fa fa-clock"></i></small>
                        </div>
                    </div>
                </div>
                <div>
                    <p class="m-0" [innerHTML]="itinerary.Description"></p>
                </div>
            </div>
        </div>
    `,
    styles: [
    ]
})
export class ItineraryCardComponent implements OnInit {
    @Input() itinerary: Itinerary;
        
    constructor() { }

    ngOnInit(): void {
    }
}
