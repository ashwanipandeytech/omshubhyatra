import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pilgrimage',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Pilgrimage Packages'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

    <div class="container">
        <div class="row">
            <div class="col-12 py-5">

            </div>
        </div>
        <div class="row">
            <div class="col-12 py-5">
                <h2 class="display-3 text-center">Under Construction</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12 py-5">

            </div>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class PilgrimageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
