import { Component, Input, OnInit } from '@angular/core';

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
  selector: 'app-category-carousal',
  template: `
    <div class="container py-3 mb-5">
        <div class="row justify-content-center">
            <div class="col-lg-12 px-3 position-relative category-carousal">

                <swiper
                class="swiper-wrapper"
                [config]="config">

                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>

                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>

                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>

                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>

                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>
                    
                    <ng-template swiperSlide *ngFor="let category of categories">
                        <app-category-card [category]="category"></app-category-card>
                    </ng-template>

                </swiper>

                <div class="swiper-navigation">
                    <button class="btn swiper-prev"><i class="fas fa-arrow-alt-circle-left"></i></button>
                    <button class="btn swiper-next"><i class="fas fa-arrow-alt-circle-right"></i></button>
                </div>

            </div>
        </div>
    </div>  
  `,
  styles: [
  ]
})
export class CategoryCarousalComponent implements OnInit {
    @Input() categories = [];
    
    constructor() { }

    ngOnInit(): void {
    }

    config: Object = {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        spaceBetween: 40,
        slidesOffsetBefore: 20,
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            640: {
                slidesPerView: 2
            },
            980: {
                slidesPerView: 3
            }
        },
    }
}

