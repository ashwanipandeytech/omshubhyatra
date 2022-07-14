import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../services/api.service";
declare var gtag;
@Component({
  selector: 'app-thankyou',
  template: `
      <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
      <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
      <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>

      <header class="site-header" id="header">
          <h1 class="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
      </header>
      <div class="main-content">
          <i class="fa fa-check main-content__checkmark" id="checkmark"></i>
          <p class="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling {{packageName}} Form. It means a lot to us, just like you do! Your Query Submitted successfully. One of our representative will contact you shortly.</p>
          
          <br/>
          <br/>
          <a href="https://omshubhyatra.in" class="btn btn-primary text-white">Go Home</a>
      </div>

      <footer class="site-footer" id="footer">
          <p class="site-footer__fineprint" id="fineprint">Copyright ©2021 | All Rights Reserved</p>
      </footer>

  `,
  styles: [
  ]
})
export class ThankyouComponent implements OnInit {
    packageName:string;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {

      this.packageName  = this.route.snapshot.paramMap.get('packageName');

    //  if (document.URL.indexOf("thankyou") > -1) {
        console.info('loaded')
        gtag('event', 'conversion', {'send_to': 'AW-10847197748/DLp-CLTWhpUDELS0rLQo'});
    
    
   // }
  }

}
