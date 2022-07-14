import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../../../services/api.service';
import { Package } from 'src/app/models/package.model';
import { Itinerary } from 'src/app/models/itinerary.model';
import { Category } from 'src/app/models/category.model';
import { Observable } from 'rxjs';

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
    selector: 'app-package',
    templateUrl: './package.component.html',
    styles: [`
        .package-hero-bg{
            position: relative;
            background-size: cover;
            background-position: center;
            height: 400px;
            overflow: hidden;
        }
        .package-hero-bg table{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 1;
        }
        .film{
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 0;
            background: rgba(0,0,0,0.4);
        }
        .cursor-pointer{
            cursor:pointer;
            
        }
        .textleft{
            text-align:left;
           
        }
        .packagesrow{

    border: 1px solid #23a8db;

        }
        .btn-link{
            color:#fa6105;
        }
        .btn-link:hover{
            font-size:14px;
            color:#004276
        }
        .category{
            font-size:15px
        }
        .activeSlug{
            color:#0b80ad !important;
        }
        .btn-check:focus+.btn, .btn:focus{
            box-shadow:none;
        }
        @media (max-width: 767px) {
            .headingtext {
              margin: 0 auto;
              float:left
            }
            
          }
  `]
})
export class PackageComponent implements OnInit {
    package: Package[];
    itineraries: Itinerary[];

    packageID: string;
    headerBgImage: string;
    packageImages: any[];
    ctgryPil: Category[];
    specificCategory: any;
    packages: Package[];
    constructor(private route: ActivatedRoute, private apiService: ApiService,private router:Router) { }

    loadItineraries(id) {
        this.apiService.getItinerary(id).subscribe(response => {
            this.itineraries = response;
            console.info(this.itineraries)

            this.initPackageSlider();
        });
    }

    ngOnInit(): void {
        this.specificCategory = [];
        this.apiService.getCategoriesByType("Pilgrimage").subscribe(response => {
            this.ctgryPil = response;
        });



        this.packageID = this.route.snapshot.paramMap.get('packageID');
        this.apiService.getPackageBySlug(this.packageID).subscribe(response => {
            this.package = response;   
          //  console.info('test',response)    
            
            if(response==null || response==undefined){
                this.router.navigateByUrl('/404');
            }else{
                this.getCategoryById(this.package['CategoryId'])
                this.getPackagesByCategoryId(this.package['CategoryId'])
                this.loadItineraries(this.package['PackageId']);
                this.headerBgImage = 'https://omshubhyatra.in/' + this.package['Images'][0]['Image'];
           
            }
            });
    }
    getCategoryById(categoryId) {
        let token = localStorage.getItem('token');
        this.apiService.getCategoryById(categoryId).subscribe(response => {
            console.info('category by id', response)
            this.specificCategory = response[0];

        });
    }
    getPackagesByCategoryId(categoryId)  {
        this.apiService.getPackagesByCategory(categoryId).subscribe(response => {
            this.packages = response;
            console.info('packages', this.packages)
           
        });
    }
    configMain: Object = {
        spaceBetween: 10,
        grabCursor: false,
        loop: true,
        loopedSlides: 4,
        autoplay: {
            delay: 5000
        },
        // other parameters
        on: {
            click: function () {
                /* do something */
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        }
    }

    configThumbs: Object = {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.4,
        slideToClickedSlide: true,
        loop: true,
        loopedSlides: 4,
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        // other parameters
        on: {
            click: function () {
                /* do something */
            }
        }
    }

    controlThumbSwiper: any;
    setControlThumbSwiper(swiper) {
        this.controlThumbSwiper = swiper;
    }

    controlMainSwiper: any;
    setControlMainSwiper(swiper) {
        this.controlMainSwiper = swiper;
    }

    initPackageSlider() {
        this.packageImages = [];

        for (const key in this.itineraries) {
            if (Object.prototype.hasOwnProperty.call(this.itineraries, key)) {
                const element = this.itineraries[key];

                if (false === this.packageImages.includes(element.Image)) {
                    this.packageImages.push(element.Image);
                }
            }
        }

        //console.log(this.packageImages);
    }
}
