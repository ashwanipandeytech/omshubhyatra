import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Package } from 'src/app/models/package.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-manage-packages',
  template: `
    <div class="sidebar-container">
        <app-sidenav></app-sidenav>
            
        <div class="right-content min-vh-100">
            <div class="container-fluid">
                <app-page-title [title]="'Manage Package'" [icon]="'fa-plus'" [button]="'Add Package'" [url]="'/admin/packages/add'"></app-page-title>

                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                        <div class="card-body">
                        <table *ngIf="packages" datatable class="row-border hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Days</th>
                                    <th width="255px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let package of packages">
                                    <td>{{ package.Title }}</td>
                                    <td>{{ package.Price }}</td>
                                    <td>{{ package.NoOfDays }}</td>
                                    <td>
                                        <a class="btn btn-primary btn-sm me-2" [routerLink]=" '/admin/itinerary/' + package.PackageId + '/manage/'"><i class="fas fa-plus me-2"></i> Itinerary</a>
                                        <a class="btn btn-secondary btn-sm me-2" [routerLink]=" ['/admin/packages/edit/' + package._id] "><i class="fas fa-pen me-2"></i> Edit</a>
                                        <button class="btn btn-danger btn-sm"
                                            [swal]="{ 
                                                icon: 'warning',
                                                title: 'Delete Package',
                                                html: 'Are you sure you want to delete <br/>&quot;<strong>' + package.Title + '</strong>&quot;',
                                                confirmButtonColor: '#D60D45',
                                                confirmButtonText: 'Yes, delete it!',
                                                showCancelButton: true,
                                                cancelButtonColor: '#535C68'
                                            }"
                                            (confirm)="deletePackageAction(package._id)"
                                        ><i class="fas fa-trash-alt me-2"></i> Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div> 
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  `,
  styles: [
  ]
})
export class ManagePackagesComponent implements OnInit {
    packages: Package[];
    
    constructor(private apiService: ApiService, private adminApiService: AdminService) { }

    ngOnInit(): void {
        this.loadPackages();
    }

    loadPackages(){
        this.apiService.getAllPackages().subscribe(response => {
            // console.log(response);
            
            this.packages = response;
        });
    }

    deletePackageAction(packageId){
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.deletePackage(packageId, token).subscribe(response => {
            this.loadPackages();
        });
    }
}
