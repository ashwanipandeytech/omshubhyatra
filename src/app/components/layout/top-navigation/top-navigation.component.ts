import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from './../../../models/seo.model';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-top-navigation',
    template: `
    <style>
    a{
    text-decoration: none;
    }
        .hide{display:none;}
        #dom-pack, #pil-pack, #fd-pack{position: absolute; background: #f8f9fa;  border: 1px solid #ffb6ca;}
        #dom-pack a, #pil-pack a, #fd-pack a{border-bottom: 1px solid #ffb6ca;}
        
        .sticky-header{
            background: #fff;
        }

        /* Navigation Styles */
        nav { position: relative;  }

        ul.main-nav {
            list-style-type: none;
            padding: 0px;
            font-size: 0px;
            max-width: 1000px;
            margin: 0 auto;
        }

        ul.main-nav > img {
            padding: 10px;
            width: 150px;
        }
        
        ul.main-nav > li {
            display: inline-block;
            padding: 0;
        }

        ul.main-nav > li > a {
            display: block;
            padding: 10px 15px;
            text-decoration: none;
            position: relative;
            color: #fa6105;
            font-size: 16px;
            font-weight: 400;
            box-sizing: border-box;
        }

        ul.main-nav > li:hover { background-color: #005294; }
        ul.main-nav > li:hover > a { color: #fff; font-weight: 400; }

        ul.main-nav > li ul.sub-menu-lists {
            margin: 0px;
            padding: 0px;
            list-style-type : none;
            display:block;
        }

        ul.main-nav > li ul.sub-menu-lists > li {
            padding: 2px 0;
        }

        ul.main-nav > li ul.sub-menu-lists > li > a {
            font-size: 14px;
        }

        .ic {
            position: fixed;
            cursor: pointer;
            display: inline-block;
            right: 25px;
            width: 32px;
            height: 24px;
            text-align: center;
            top:0px;
            outline: none;
        }

        .ic.close {
            opacity: 0;
            font-size: 0px;
            font-weight: 300;
            color: #fff;
            top:8px;
            height:40px;
            display: block;
            outline: none;
        }

        /* Menu Icons for Devices*/
        .ic.menu { top:25px; z-index : 20; }

        .ic.menu .line {
            height: 4px;
            width: 100%;
            display: block;
            margin-bottom: 6px;
        }
        .ic.menu .line-last-child { margin-bottom: 0px;  }

        .sub-menu-head { margin: 10px 0; }
        .banners-area { margin-top: 20px; padding-top: 15px; }

        @media only screen and (max-width:900px) {
           
            .hideInmobile{
                display:none;
            }
            .setInmobileview{
                text-align: left !important;
                margin-left: 15px;
            }
        }
        @media only screen and (max-width:768px) {
            .upper-head{
              
            }
         
            .sub-menu-head { color:orange; }
            .ic.menu { display: block; }
            .ic.menu .line {
                -webkit-transition: all 0.4s ease 0s;
                -o-transition: all 0.4s ease 0s;
                transition: all 0.4s ease 0s;
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transform-origin: center center;
                -ms-transform-origin: center center;
                transform-origin: center center;
                background-color: #fff !important;
            }
            .ic.menu:focus .line { z-index:999999999999; background-color: #fff !important; }

            .ic.menu:focus .line:nth-child(1) {
                -webkit-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

            .ic.menu:focus .line:nth-child(2){
                -webkit-transform: rotate(-45deg);
                -moz-transform: rotate(-45deg);
                -ms-transform: rotate(-45deg);
                transform: rotate(-45deg);
                margin-top: -10px;
            }

            .ic.menu:focus .line:nth-child(3){
                transform: translateY(15px);
                opacity: 0;
            }

            .ic.menu:focus{ outline: none; }
            .ic.menu:focus ~ .ic.close { opacity: 1; z-index : 9999999999998;  outline: none;  }

            /*
            
            .ic.menu:focus ~ .ic.close { opacity: 1.0; z-index : 21;  }
            .ic.close:focus { opacity: 0; }
            */
            .ic.menu:hover,
            .ic.menu:focus{ opacity: 1; }


            nav { background-color: transparent; }

            /* Main Menu for Handheld Devices  */
            ul.main-nav {
                z-index:99999999;
                padding: 50px 0;
                position: fixed;
                right: 0px;
                top: 0px;
                width: 0px;
                background-color:#005294;
                height: 100%;
                overflow: auto;
                /*CSS animation applied : Slide from Right*/
                -webkit-transition-property: background, width;
                -moz-transition-property: background, width;
                -o-transition-property: background, width;
                transition-property: background, width;
                -webkit-transition-duration: 0.6s;
                -moz-transition-duration: 0.6s;
                -o-transition-duration: 0.6s;
                transition-duration: 0.6s;
            }

            .ic.menu:focus ~ .main-nav { width: 300px; background-color:#2d2d2d; }

            ul.main-nav > * {
                -webkit-transition-property: opacity;
                -moz-transition-property: opacity;
                -o-transition-property: opacity;
                transition-property: opacity;
                -webkit-transition-duration: 0.4s;
                -moz-transition-duration: 0.4s;
                -o-transition-duration: 0.4s;
                transition-duration: 0.4s;
                opacity: 0;
            }
            .ic.menu:focus ~ .main-nav > * {opacity: 1;}

            ul.main-nav > li > a:after {display: none;}
            ul.main-nav > li:first-child { border-radius: 0px; }
            ul.main-nav > li {
                display: block;
                border-bottom: 1px solid #2d2d2d;
                border-block-width: 7px;
                border-top: 1px solid #666;
            }

            ul.main-nav > li > a { font-weight: 600; }

            ul.main-nav > li ul.sub-menu-lists > li a { color: #eee; font-size: 14px; }
            .sub-menu-head { font-size: 16px;}
            ul.main-nav > li:hover { background-color: transparent;  }
            ul.main-nav > li:hover > a {color: #fff; text-decoration: none; font-weight: 600;}
            .ic.menu:focus ~ ul.main-nav > li > div.sub-menu-block {
                border-left: 0px solid #ccc;
                border-right: 0px solid #ccc;
                border-bottom: 0px solid #ccc;
                position: relative;
                visibility: visible;
                opacity: 1.0;
            }

            .sub-menu-block { padding: 0 30px; }
            .banners-area { padding-bottom: 0px;  }
            .banners-area div { margin-bottom: 15px;  }
            .banners-area { border-top: 1px solid #444; }
        }

        @media only screen and (min-width:769px) {
            .ic.menu { display: none; }
            /* Main Menu for Desktop Devices  */
            ul.main-nav { display: block; position: relative; }
            .sub-menu-block { padding: 15px; }

            /* Sub Menu */
            ul.main-nav > li > div.sub-menu-block {
                visibility: hidden;
                background-color: #f9f9f9;
                position: absolute;
                margin-top: 0px;
                width: 100%;
                color: #333;
                left: 0;
                box-sizing: border-box;
                z-index : 3;
                font-size: 16px;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                opacity: 0;

                /*CSS animation applied for sub menu : Slide from Top */
                -webkit-transition: all 0.4s ease 0s;
                -o-transition: all 0.4s ease 0s;
                transition: all 0.4s ease 0s;
                -webkit-transform: rotateX(90deg);
                -moz-transform: rotateX(90deg);
                -ms-transform: rotateX(90deg);
                transform: rotateX(90deg);
                -webkit-transform-origin: top center;
                -ms-transform-origin: top center;
                transform-origin: top center;

            }

            ul.main-nav > li:hover > div.sub-menu-block{
                background-color: #f9f9f9;
                visibility: visible;
                opacity: 1;
                -webkit-transform: rotateX(0deg);
                -moz-transform: rotateX(0deg);
                -ms-transform: rotateX(0deg);
                transform: rotateX(0deg);
            }

            ul.main-nav > li > div.sub-menu-block > * {
                -webkit-transition-property: opacity;
                -moz-transition-property: opacity;
                -o-transition-property: opacity;
                transition-property: opacity;
                -webkit-transition-duration: 0.4s;
                -moz-transition-duration: 0.4s;
                -o-transition-duration: 0.4s;
                transition-duration: 0.4s;
                opacity: 0;
            }

            ul.main-nav > li:hover > div.sub-menu-block > * {
                opacity: 1;
            }

            .sub-menu-head { font-size: 20px;}

            /* List Separator: Outer Border */
            header.dark ul.main-nav > li > a { border-right: 1px solid #bbb; }
            header.light ul.main-nav > li > a { border-right: 1px solid #666; }

            /* List Separator: Inner Border */
            ul.main-nav > li > a:after {
                content: '';
                width: 1px;
                height: 62px;
                position: absolute;
                right:0px;
                top: 0px;
                z-index : 2;
            }

            /* Drop Down/Up Arrow for Mega Menu */
            ul.main-nav > li > a.mega-menu > span { display: block; vertical-align: middle; }
            ul.main-nav > li > a.mega-menu > span:after {
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 5px solid #fa6105;
                border-bottom: 5px solid transparent;
                content: '';
                background-color: transparent;
                display: inline-block;
                margin-left: 10px;
                vertical-align: middle;
            }

            ul.main-nav > li:hover > a.mega-menu span:after{
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 0px solid transparent;
                border-bottom: 5px solid #fff;
            }
            .banners-area { border-top: 1px solid #ccc; }
        }
    </style>
    <header class="sticky-header">
        <div class="upper-head">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 contact-info text-white">
                        <div>
                        <span class="hideInmobile">
                            <span>
                                <a class="text-white social-connect" href="https://m.facebook.com/omshubhyatraofficial/" target="_blank">
                                <i class="fab fa-facebook-square me-3"></i></a>
                            </span>
                            <span>
                                <a class="text-white social-connect" href="https://twitter.com/omshubhyatra/status/567255988013527040" target="_blank">
                                <i class="fab fa-twitter-square me-3"></i></a>
                            </span>
                            <span>
                                <a class="text-white social-connect" href="https://web.whatsapp.com/send?phone=919311877625&text=Hi%20Om%20Shubh%20Yatra%2C%20I%20need%20to%20more%20info%20about%20Chardham%20Yatra" target="_blank">
                                <i class="fab fa-whatsapp me-3"></i></a>
                            </span>
                            | 
                         </span>
                            <span class="ms-3">
                                <a class="text-white text-decoration-none" title="info@omshubhyatra.com" href="mailto:info@omshubhyatra.com"><i class="fas fa-envelope"></i> info@omshubhyatra.com</a>
                            </span>
                        </div>
                    </div>
                    
                    <div class="col-sm-6 contact-info text-white">
                        <div class="text-md-end text-center setInmobileview">
                            <span class="me-3">
                                <a class="text-white text-decoration-none" href="tel:9311877629"><i class="fas fa-phone-alt"></i> 9311-877-629</a>
                            </span> | 
                            <span class="ms-3">
                                <a class="text-white text-decoration-none" title="Online Payment" href="https://www.payumoney.com/paybypayumoney/#/DC74FA96BB5B9ECC5031217517137D7D"><i class="fas fa-wallet"></i> Online Payment</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        <nav role="navigation">
            <a href="javascript:void(0);" class="ic menu" tabindex="1">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </a>
            <a href="javascript:void(0);" class="ic close"><span class="fa fa-times-circle-o"></span></a>
            <ul class="main-nav">
                <a class="navbar-brand py-0" routerLink="/" title="Home"><img src="/assets/images/logo.png" /></a>
                
                <li class="top-level-link">
                    <a class="nav-link" routerLink="/" title="Home">Home</a>
                </li>

                <li class="top-level-link">
                    <a class="mega-menu" title="Packages"><span>Packages</span></a>
                    <div class="sub-menu-block">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h2 class="sub-menu-head" title="Fixed Departure">Fixed Departure</h2>
                                <ul class="sub-menu-lists">
                                    <li *ngFor="let fcat of ctgryFd">
                                    <strong><a href="/category/{{fcat.CategorySlug}}" title="{{fcat.CategoryName}}">{{fcat.CategoryName}}</a></strong></li>
                                </ul>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h2 class="sub-menu-head" title="Pilgrimage">Pilgrimage</h2>
                                <ul class="sub-menu-lists">
                                    <li *ngFor="let category of ctgryPil">
                                    <strong><a href="/category/{{category.CategorySlug}}" title="{{category.CategoryName}}">{{category.CategoryName}}</a></strong></li>
                                </ul>
                            </div>

                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <img src="data:image/jpeg;base64,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" width="100%"/>
                            </div>
                        </div>
                    </div>
                </li>
                
     
                <li class="top-level-link">
                    <a class="mega-menu" title="Destination"><span>Destination</span></a>
                    <div class="sub-menu-block">
                        <div class="row">
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h2 class="sub-menu-head">International</h2>
                                <ul class="sub-menu-lists">
                                    <li *ngFor="let fin of ctgryIn">
                                    <strong><a href="/category/{{fin.CategorySlug}}" title="{{fin.CategoryName}}">{{fin.CategoryName}}</a></strong></li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4">
                                <h2 class="sub-menu-head">Domestic</h2>
                                <ul class="sub-menu-lists">
                                    <li *ngFor="let cat of ctgryDom">
                                    <strong><a href="/category/{{cat.CategorySlug}}" title="{{cat.CategoryName}}">{{cat.CategoryName}}</a></strong></li>
                                </ul>
                            </div>
                            <div class="col-md-4 col-lg-4 col-sm-4">
                               <img src="https://static.wixstatic.com/media/10887c_c40ca7b52d74443ba839601f03d205f2~mv2.png/v1/crop/x_139,y_0,w_892,h_659/fill/w_554,h_434,al_c,q_85,usm_0.66_1.00_0.01/golden-triangle-india-menorah-tours.webp" width="100%"/>
                            </div>
                        </div>
                    </div>
                </li>
                
                
                <li class="top-level-link">
                    <a title="Hotels"><span>Hotels</span></a>
                </li>

                <li class="top-level-link">
                    <a href="car-rental" title="Car Rental"><span>Car Rental</span></a>
                </li>

                <li class="top-level-link">
                    <a title="Online Payment" href="https://www.payumoney.com/paybypayumoney/#/DC74FA96BB5B9ECC5031217517137D7D"><span>Online Payment</span></a>
                </li>
                
                
            </ul>
        </nav>
        
        
        
        

        
        
        
    </header>
  `,
    styles: [
    ]
})
export class TopNavigationComponent implements OnInit {
    stickToTop: boolean;
    ctgryDom: Category[];
    ctgryFd: Category[];
    ctgryIn: Category[];
    ctgryPil: Category[];
    seo: Seo[];
    seotag: string = "home";

    constructor(private apiService: ApiService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private meta: Meta,
        @Inject(DOCUMENT) private dom) {
        if (this.activatedRoute.url['_value'][1] !== undefined) {
            this.seotag = this.activatedRoute.url['_value'][1].path;
        } else if (this.activatedRoute.url['_value'][0] !== undefined) {
            this.seotag = this.activatedRoute.url['_value'][0].path;
        }
    }

    ngOnInit(): void {

        this.apiService.getCategoriesByType("Domestic").subscribe(response => {
            this.ctgryDom = response;
        });
        this.apiService.getCategoriesByType("Pilgrimage").subscribe(response => {
            this.ctgryPil = response;
        });
        this.apiService.getCategoriesByType("Fixed-Departure").subscribe(response => {
            this.ctgryFd = response;
        });

        this.apiService.getCategoriesByType("International").subscribe(response => {
            this.ctgryIn = response;
        });

        this.apiService.getSeoBySlug(this.seotag).subscribe(response => {
            if (response[0] === undefined) {
                this.apiService.getSeoBySlug("home").subscribe(response => {
                    this.seo = response;
                    this.titleService.setTitle(this.seo[0]['Title']);
                    this.meta.updateTag({ name: 'keywords', content: this.seo[0]['Keywords'] });
                    this.meta.updateTag({ name: 'description', content: this.seo[0]['Description'] });

                });
            } else {
                this.seo = response;
                this.titleService.setTitle(this.seo[0]['Title']);
                this.meta.updateTag({ name: 'keywords', content: this.seo[0]['Keywords'] });
                this.meta.updateTag({ name: 'description', content: this.seo[0]['Description'] });
            }
            var elementCanonical: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`);
            if (elementCanonical != null) {
                this.dom.head.removeChild(elementCanonical);
            }
            let link: HTMLLinkElement = this.dom.createElement('link');
            link.setAttribute('rel', 'canonical');
            this.dom.head.appendChild(link);
            link.setAttribute('href', this.dom.URL);
        });
    }

    @HostListener('window:scroll', ['$event'])
    doSomething(event) {
        window.pageYOffset > 300 ? this.stickToTop = true : this.stickToTop = false;
    }
}
