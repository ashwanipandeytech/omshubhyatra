import { Component, OnInit } from '@angular/core';

// import Swiper core and required components
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller
} from "swiper/core";

// install Swiper components
SwiperCore.use([
    Navigation,
    Pagination,
    Scrollbar,
    Parallax,
    A11y,
    Virtual,
    Zoom,
    Autoplay,
    Thumbs,
    Controller
]);

@Component({
  selector: 'app-testimonial',
  template: `
    <div class="testimonial-slider">
        <swiper [slidesPerView]="3" [spaceBetween]="30" [navigation]="false" [pagination]="{ clickable: true }">
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
            <ng-template swiperSlide>
                <app-testimonial-slide></app-testimonial-slide>
            </ng-template>
        </swiper>
    </div>
  `,
  styles: [
  ]
})
export class TestimonialComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    // config: Object = {
    //     speed: 1000,
    // }
    // thumbsSwiper: any;
    // setThumbsSwiper(swiper) {
    //     this.thumbsSwiper = swiper;
    // };
}
