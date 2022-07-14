import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]="'Our Hotels'" [bgImage]="'assets/images/theme/slider/slide-2.jpg'"></app-header-banner>

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
export class HotelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
