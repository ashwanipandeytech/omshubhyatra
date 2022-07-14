import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ApiService } from '../../../services/api.service';
import {DomSanitizer} from '@angular/platform-browser';

import { Package } from './../../../models/package.model';
import { Offer } from './../../../models/offer.model';
import { Category } from './../../../models/category.model';
import { Popup } from './../../../models/popup.model';
import { Destination } from './../../../models/destination.model';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
      `.modal{
        top: 21px;
      }
      .modal-backdrop{
        top: 40px;
      }
          .st-solo-about-us .st-about-us-left .wpb_content_element p {
              font-size: 24px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: 0.48px;
              color: #36bca1;
              padding-left: 0px !important;
          }

          .st-solo-about-us .st-about-us-left .wpb_content_element h3 {
              margin-top: 0px;
              margin-bottom: 0px;
              padding-left: 0px !important;
              font-size: 36px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 36px;
              letter-spacing: -0.96px;
              color: var(--main-color, #123a32);
              position: relative;
              display: inline-block;
          }

          .st-solo-about-us .st-about-us-left .wpb_content_element h3:after {
              content: url(https://omshubhyatra.in/assets/images/curly.svg);
              position: absolute;
              left: 0px;
              bottom: -40px;
          }

          .vc_custom_1587959007516 {
              background-image: url(https://omshubhyatra.in/assets/images/home_never_be_alone_bg-1.png?id=8495) !important;
          }

          .st-solo-about-us {
              padding: 100px 0px 104px 0px;
              background-size: cover;
              background-position: center top !important;
              background-repeat: no-repeat;
              position: relative;
          }
          .st-solo-about-us .st-about-us-left .wpb_content_element.wpb_single_image {
              position: absolute;
              bottom: auto;
              top: 220px;
              right: auto;
          }
          .wpb_single_image .vc_figure {
              display: inline-block;
              vertical-align: top;
              margin: 0;
              max-width: 100%;
          }
          .wpb_single_image img {
              height: auto;
              max-width: 100%;
              vertical-align: top;
          }
          .st-solo-about-us .st-about-us-right .wpb_content_element.st-about--btn a {
              font-size: 14px;
              font-weight: 600;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.43;
              letter-spacing: 1px;
              color: #df5334;
              display: inline-block;
              border-bottom: 2px dashed #df5334;
              margin-top: 14px;
              text-decoration: none;
              padding-bottom: 2px;
          }
          .st-solo-about-us .st-about-us-right .wpb_content_element p img {
              margin-right: 16px;
              width: 48px;
              height: 48px;
              object-fit: cover;
          }
          @media (max-width: 991px) {
              .st-solo-about-us .st-about-us-left .wpb_content_element.wpb_single_image {
                  position: unset;
                  text-align: center;
              }
          }



          .st-offer-new {
              padding: 60px 30px;
              border-radius: 5px;
              position: relative;
              overflow: hidden;
              z-index: 0;
          }

          .st-offer-new .item-title {
              color: #fff;
              margin-top: 60px;
              font-weight: 450;
              font-size: 35px;
              margin-bottom: 18px;
              -webkit-transition: all .4s;
              -moz-transition: all .4s;
              -ms-transition: all .4s;
              -o-transition: all .4s;
              transition: all .4s;
          }
          .st-offer-new .item-sub-title {
              color: #fff;
              font-size: 14px;
              line-height: 24px;
              padding-bottom: 75px;
          }

          .st-offer-new a.btn-default {
              position: absolute;
              opacity: 0;
              bottom: 20px;
              color: #fff;
              background: 0 0;
              border-color: #fff;
              -webkit-transition: all .3s;
              -moz-transition: all .3s;
              -ms-transition: all .3s;
              -o-transition: all .3s;
              transition: all .3s;
          }
          .st-offer-new .img-cover {
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              z-index: -1;
              -webkit-transition: all .2s;
              -moz-transition: all .2s;
              -ms-transition: all .2s;
              -o-transition: all .2s;
              transition: all .2s;
              background-size: cover!important;
              background-position: center;
          }

          .st-offer-new:hover a.btn-default {
              opacity: 1;
              bottom: 60px;
          }

          .st-offer-new a.btn-default:hover {
              background: #fff;
              border-color: #fff;
              color: var(--link-color,#5191FA);
          }

          .st-offer-new:hover .img-cover {
              -webkit-transform: scale(1.1);
              -moz-transform: scale(1.1);
              -ms-transform: scale(1.1);
              -o-transform: scale(1.1);
              transform: scale(1.1);
          }
          .st-offer-new:hover .item-title {
              margin-top: 25px;
          }
          @media only screen and (max-width:800px) {
           
            #myModal{
                top: 82px !important;
            }
            .modal-backdrop {
                top: 80px;
            }
            
        }
      `
  ]
})
export class HomeComponent implements OnInit {
    packages:Package[];
    categories:Category[];
    destinations:Destination[];
    offerone:Offer[];
    offertwo:Offer[];
    offerthree:Offer[];
    haveofferone:String;
    haveoffertwo:String;
    haveofferthree:String;
    popupsShow:boolean = true;
    popupsTitle:String;
    popupsImage:String;
    cities: any;

    constructor(private apiService: ApiService, private sanitizer:DomSanitizer) {}

    ngOnInit(): void {
        this.offerone=[];
        this.offertwo=[];
        this.offerthree=[];
        this.apiService.getAllCategoriesWeb().subscribe(response => {
            this.categories = response;
        });

        this.apiService.getPackageByKey("LastMinuteDeal").subscribe(response => {
            this.packages = response;
        });

        this.apiService.getOfferByNumber("1").subscribe(response => {

            if (typeof response !== 'undefined' && response.length > 0) {
                this.haveoffertwo="yes";
                this.offerone = response;
            }else{
                this.haveofferone="";
            }
        });

        this.apiService.getOfferByNumber("2").subscribe(response => {

            if (typeof response !== 'undefined' && response.length > 0) {
                this.haveoffertwo="yes";
                this.offertwo = response;
            }else{
                this.haveoffertwo="";
            }
        });

        this.apiService.getOfferByNumber("3").subscribe(response => {
            if (typeof response !== 'undefined' && response.length > 0) {
                this.haveofferthree="yes";
                this.offerthree = response;
            }else{
                this.haveofferthree="";
            }
        });

        this.apiService.getAllDestinations().subscribe(response => {
            this.destinations = response;
        });

        this.apiService.getAllPopups().subscribe(response => {
            this.popupsTitle = response[0].Title;
            this.popupsImage = response[0].Image;
            this.popupsShow = response[0].IsActive;

            if (this.popupsShow) {
                $('#myModal').modal('show');
                $('#myModal').modal({
                    backdrop: false
                  })
                
            }
        });
    }

    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    closeModal(){
        //console.log("closed");
        $('#myModal').modal("hide");
    }

    loadExecution(){
        let selected_category = $('#categorySelect').val();
        
        this.apiService.getExecutionCities(selected_category).subscribe(response => {
            this.cities = response;
        });
    }
}