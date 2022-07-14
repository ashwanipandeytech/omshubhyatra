import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-rental',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Car Rental'" [bgImage]="'https://omshubhyatra.in/assets/images/uploads/car-rental.jpg'"></app-header-banner>

    <div class="container py-5">
        <div class="row">
            
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                            <div class="deals-image">
                                <div class="responsive-image-placeholder">
                                    <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/9-seater.jpg">
                                    <div class="responsive">
                                        <img src="https://omshubhyatra.in/assets/images/uploads/9-seater.jpg" alt="Image">
                                    </div>
                                </div>
                                <span class="deal-price price-inr-symbol">
                        <span class="pt-2">9 Seater Tempo</span>
                    </span>
                            </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                            
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                        <div class="deals-image">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/12-seater.jpg">
                                <div class="responsive">
                                    <img src="https://omshubhyatra.in/assets/images/uploads/12-seater.jpg" alt="Image">
                                </div>
                            </div>
                            <span class="deal-price price-inr-symbol">
                        <span class="pt-2">12 Seater Tempo</span>
                    </span>
                        </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                           
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                        <div class="deals-image">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/15-seater.jpg">
                                <div class="responsive">
                                    <img src="https://omshubhyatra.in/assets/images/uploads/15-seater.jpg" alt="Image">
                                </div>
                            </div>
                            <span class="deal-price price-inr-symbol">
                        <span class="pt-2">15 Seater Tempo</span>
                    </span>
                        </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                            
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                        <div class="deals-image">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/18-seater.jpg">
                                <div class="responsive">
                                    <img src="https://omshubhyatra.in/assets/images/uploads/18-seater.jpg" alt="Image">
                                </div>
                            </div>
                            <span class="deal-price price-inr-symbol">
                        <span class="pt-2">18 Seater Tempo</span>
                    </span>
                        </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                            
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                        <div class="deals-image">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/20-seater.jpg">
                                <div class="responsive">
                                    <img src="https://omshubhyatra.in/assets/images/uploads/20-seater.jpg" alt="Image">
                                </div>
                            </div>
                            <span class="deal-price price-inr-symbol">
                        <span class="pt-2">20 Seater Tempo</span>
                    </span>
                        </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                            
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="package-card-one">
                    <div class="deals-item-outer">
                        <div class="deals-image">
                            <div class="responsive-image-placeholder">
                                <img class="ar-placeholder" src="https://omshubhyatra.in/assets/images/uploads/26-seater.jpg">
                                <div class="responsive">
                                    <img src="https://omshubhyatra.in/assets/images/uploads/26-seater.jpg" alt="Image">
                                </div>
                            </div>
                            <span class="deal-price price-inr-symbol">
                        <span class="pt-2">26 Seater Tempo</span>
                    </span>
                        </div>
                        <div class="deal-content">
                            <div class="deal-rating pb-3">
                                <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star-o"></span>
                            </div>
                            <div class="px-3">
                                <table class="ex-duration my-3">
                                    <tr><td class="pak-duration">Starting from Rs.27/km</td></tr>
                                </table>
                            </div>
                           <img src="https://omshubhyatra.in/assets/images/services-png.png" width="100%"/>

                            <a routerLink="/contact" class="btn btn-danger rounded-0" title="Book Now">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
        </div>       
    </div>
    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class CarRentalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
