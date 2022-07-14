import { Component, Input, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';

@Component({
  selector: 'app-parallax-banner',
  template: `
    <div class="parallax-window-area" [ngStyle]="{ 'height': height }">
        <img class="the-parallax-image" [src]="bgImage" alt="image">
        <div class="overlay-content">
            <h4 class="display-2 text-white">{{ title }}</h4>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class ParallaxBannerComponent implements OnInit {
    @Input() title:string;
    @Input() height:string;
    @Input() bgImage:string;

    constructor() { }

    ngOnInit(): void {
        const image = document.getElementsByClassName('the-parallax-image');
        new simpleParallax(image, {
            orientation: 'down',
            scale: 1.5,
            overflow: true,
            transition: 'cubic-bezier(0,0,0,1)'
        });
    }
}
