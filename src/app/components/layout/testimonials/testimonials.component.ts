import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial.model';
import { ApiService } from 'src/app/services/api.service';

import * as $ from 'jquery';

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
  selector: 'app-testimonials',
  template: `
    <!-- top gallery -->
    <div class="testimonial-slider">

        <swiper
        class="swiper-wrapper testimonial-content-slide"
        [config]="configMain"
        (swiper)="setControlThumbSwiper($event)"
        [watchSlidesVisibility]="true"
        [watchSlidesProgress]="true"
        [controller]="{ control: controlMainSwiper }">
            
            <ng-template swiperSlide *ngFor="let testimonial of testimonials">
                <div class="swiper-testimonial-container" data-image="https://picsum.photos/id/14/600/300">

                    <!-- Text Layer -->
                    <div class="testimonial_094_slide">
                        <div class="testimonial-profile">
                            <img src="{{testimonial.Image}}">
                            <h5 class="text-primary">{{testimonial.Name}}</h5>
                            <h6 class="text-primary">{{testimonial.Address}}</h6>
                        </div>
                        
                        <p>{{testimonial.Testimonial}}</p>
                    </div> <!-- /Text Layer -->
                    
                </div>
            </ng-template>
            
            
            
        </swiper>
        
    </div>
  `,
  styles: [`
        .testimonial_094_slide:before {
            background-image: url('/assets/images/quote.png');
        }

        .testimonial-media{
            max-width: 700px;
            margin: 0 auto;
        }
    `]
})
export class TestimonialsComponent implements OnInit {
    testimonials:Testimonial[];

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getAllTestimonials().subscribe(response => {
            this.testimonials = response;
        });
    }

    configMain: Object = {
        spaceBetween: 10,
        grabCursor: true,
        loop: true,
        loopedSlides: 6,
        autoplay: {
            delay: 5000
        },
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
    }

    controlThumbSwiper: any;
    setControlThumbSwiper(swiper) {
        this.controlThumbSwiper = swiper;
    }

    controlMainSwiper: any;
    setControlMainSwiper(swiper) {
        this.controlMainSwiper = swiper;
    }
}
