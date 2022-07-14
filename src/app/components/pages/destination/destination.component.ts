import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../services/api.service';
import { Package } from './../../../models/package.model';

@Component({
  selector: 'app-destination',
  template: `
    <!-- App Top Navigation -->
    <app-top-navigation></app-top-navigation>

    <app-header-banner [title]=" destinationName " [bgImage]=" destinationImage "></app-header-banner>

    <div class="container py-5 my-5">
        <div class="row justify-content-center">
            <app-package-card-one
                class="col-lg-4 col-md-6 col-12"
                *ngFor="let package of packages"
                [package]="package"
            ></app-package-card-one>
        </div>
    </div>

    <!-- footer -->
    <app-footer></app-footer>
  `,
  styles: [
  ]
})
export class DestinationComponent implements OnInit {
    packages: Package[];

    destinationName: string;
    destinationSlug: string;
    destinationImage: string;

    constructor(private route: ActivatedRoute, private apiService: ApiService,private router:Router) { }

    ngOnInit(): void {
        this.destinationSlug  = this.route.snapshot.paramMap.get('destinationSlug');


        this.apiService.getAllDestinations().subscribe(response => {    
            
            if(response.findIndex(item=>item.DestinationSlug== this.destinationSlug)<0){
                this.router.navigateByUrl('/404');
               
            }else{
                for (const key in response) {
                    if (Object.prototype.hasOwnProperty.call(response, key)) {
                        const element = response[key];
    
                        if(element.DestinationSlug == this.destinationSlug){
                            this.apiService.getPackagesByDestination(this.destinationSlug).subscribe(response => {
                                this.packages = response;
                                this.destinationName = element.DestinationName;
                                this.destinationImage = 'https://omshubhyatra.in/' + element.Image;
                            });
                        }
                    }
                }
            }

           
        });
    }
}
