import { Banner } from '../../../../models/banner.model';
import { Component, OnInit, Input } from '@angular/core';
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
    Controller,
    Swiper
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
  selector: 'app-header-slider',
  template: `
    <div class="header-slider">
        <swiper [slidesPerView]="1" [spaceBetween]="50" [navigation]="true" [pagination]="{ clickable: true }" [config]="config" (slideChangeTransitionStart)="transitionAnimationStart()" (afterInit)="transitionAnimationEnd()" (slideChangeTransitionEnd)="transitionAnimationEnd()">
            <ng-template swiperSlide *ngFor="let slide of sliders;">
                <div class="slide" style="background-image: url('{{slide.Image}}');">
                    <div class="inclusions" >
                        <h1 class="animate__animated animate__fadeInDown" *ngIf="slide.BannerTitle">{{slide.BannerTitle}}</h1>
                        <h1 class="animate__animated animate__fadeInUp" *ngIf="slide.TitleSlug">{{slide.TitleSlug}}</h1>
                    </div>

                </div>
            </ng-template>
        </swiper>
    </div>
  `,
  styles: []
})
export class HeaderSliderComponent implements OnInit {
    @Input() banner: Banner;
    sliders : Banner[];
    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.apiService.getAllBanners().subscribe(response => {
            this.sliders = response;
        });
    }
  
    config: Object = {
     parallax: true,
     speed: 1000,
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,},
    }

    transitionAnimationStart() {
        $('.swiper-slide-active .inclusions > h1').addClass('animate__animated animate__fadeInDown').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass('animate__animated animate__fadeInDown');
        });

        $('.swiper-slide-active .inclusions > ul').addClass('animate__animated animate__fadeInUp').bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
            $(this).removeClass('animate__animated animate__fadeInUp');
        });
    }

    transitionAnimationEnd() {
        $('.swiper-slide:not(.swiper-slide-active) .inclusions > h1').removeClass('animate__animated animate__fadeInDown');

        $('.swiper-slide:not(.swiper-slide-active) .inclusions > ul').removeClass('animate__animated animate__fadeInUp');
    }
}
