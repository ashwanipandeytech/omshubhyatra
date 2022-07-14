import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial-list',
  template: `
  <!-- App Top Navigation -->
  <app-top-navigation></app-top-navigation>

  <app-header-banner [title]="'Testimonials'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

  <div class="container py-5">
      <div class="row">
          <div class="col-12 pt-5">
              <div class="blob mx-auto text-center">
                  <h2 class="m-0 display-6 text-uppercase">BEST RATED TRAVEL AGENCY</h2>
                  <div class="divider pt-4 mb-4">
                      <i class="fas fa-spa"></i>
                  </div>
                  <p>Our customers love us! Read what they have to say below.</p>
              </div>
          </div>
      </div>
  </div>
  <div class="container py-5">
      <div class="row">
          <div class="col-12">
              <app-testimonials></app-testimonials>
          </div>
      </div>
  </div>

  <!-- footer -->
  <app-footer></app-footer>`,
  styles: [
  ]
})
export class TestimonialListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
