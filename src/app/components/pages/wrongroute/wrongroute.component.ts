import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../../../services/api.service";
declare var gtag;
@Component({
  selector: 'app-wrongroute',
  template: `
      <link rel="stylesheet" href="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/default_thank_you.css">
      <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/jquery-1.9.1.min.js"></script>
      <script src="https://2-22-4-dot-lead-pages.appspot.com/static/lp918/min/html5shiv.js"></script>

      <header class="site-header" id="header">
          <h1 class="" data-lead-id="site-header-title">PAGE NOT FOUND!</h1>
      </header>
      <div class="main-content">
         
        
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
export class WrongRouteComponent implements OnInit {
    packageName:string;

    constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {

    
  }

}
