import { Component, Input, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-header-banner',
  template: `
    <div class="app-header-banner parallax-window-area">
        <div class="the-parallax-bg-image" [ngStyle]="{'background-image': 'url(' + bgImage + ')' }"></div>
        <div class="overlay-content">
            <h4 class="display-2 text-white text-center">{{ title }}</h4> 
        </div>
    </div>
  `,
  styles: []
})
export class HeaderBannerComponent implements OnInit {
    @Input() title:string;
    @Input() bgImage:string;

  constructor() { }

  ngOnInit(): void {
    const image = document.getElementsByClassName('the-parallax-bg-image');
    new simpleParallax(image, {
        orientation: 'down',
        scale: 1.8,
        overflow: true,
    });
  }
}
