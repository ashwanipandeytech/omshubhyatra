import { Component, OnInit } from '@angular/core';
import { Category } from './../../../../models/category.model';
import { ApiService } from 'src/app/services/api.service';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-manage-categories',
  template: `
    <div class="sidebar-container">
        <app-sidenav></app-sidenav>
            
        <div class="right-content min-vh-100">
            <div class="container-fluid">
                <app-page-title [title]="'Manage Categories'" [icon]="'fa-plus'" [button]="'Add Categories'" [url]="'/admin/categories/add'"></app-page-title>

                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                        <div class="card-body">
                        <table *ngIf="categories" datatable class="row-border hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Starting Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let category of categories">
                                    <td>{{ category.CategoryName }}</td>
                                    <td>{{ category.StartingPrice }}</td>
                                    <td>
                                        <span class="me-2" *ngIf="category.IsActive;else other_content">
                                            <button class="btn btn-warning btn-sm"
                                                    [swal]="{ 
                                                icon: 'warning',
                                                title: 'De-Activate Category',
                                                html: 'Are you sure you want to de-activate <br/>&quot;<strong>' + category.CategoryName + '</strong>&quot;',
                                                confirmButtonColor: '#D60D45',
                                                confirmButtonText: 'Yes, Deactivate it!',
                                                showCancelButton: true,
                                                cancelButtonColor: '#535C68'
                                            }"
                                                    (confirm)="deactivateCategoryAction(category._id)"
                                            ><i class="fas fa-eye-slash me-2"></i> De-Activate</button>
                                        </span>
                                        <ng-template #other_content>
                                            <button class="btn btn-success btn-sm me-2 text-white"
                                                    [swal]="{ 
                                                icon: 'success',
                                                title: 'Activate Category',
                                                html: 'Are you sure you want to activate <br/>&quot;<strong>' + category.CategoryName + '</strong>&quot;',
                                                confirmButtonColor: '#D60D45',
                                                confirmButtonText: 'Yes, Activate it!',
                                                showCancelButton: true,
                                                cancelButtonColor: '#535C68'
                                            }"
                                                    (confirm)="activateCategoryAction(category._id)"
                                            ><i class="fas fa-eye me-2"></i> Activate</button>
                                        </ng-template>
                                        <a class="btn btn-primary btn-sm me-2" [routerLink]="'/admin/packages'"><i class="fas fa-plus me-2"></i> Package</a>
                                        <a class="btn btn-secondary btn-sm me-2" [routerLink]="['/admin/categories/edit/' + category.CategoryId]"><i class="fas fa-pen me-2"></i> Edit</a>
                                        <button class="btn btn-danger btn-sm"
                                            [swal]="{ 
                                                icon: 'warning',
                                                title: 'Delete Category',
                                                html: 'Are you sure you want to delete <br/>&quot;<strong>' + category.CategoryName + '</strong>&quot;',
                                                confirmButtonColor: '#D60D45',
                                                confirmButtonText: 'Yes, delete it!',
                                                showCancelButton: true,
                                                cancelButtonColor: '#535C68'
                                            }"
                                            (confirm)="deleteCategoryAction(category._id)"
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
export class ManageCategoriesComponent implements OnInit {
    categories: Category[];

    constructor(private apiService: ApiService, private adminApiService: AdminService) { }

    ngOnInit(): void {
        this.loadCategories();
    }

    loadCategories(){
        this.apiService.getAllCategories().subscribe(response => {
            this.categories = response;
        });
    }

    deleteCategoryAction(categoryId){
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.deleteCategory(categoryId, token).subscribe(
            result => {
                this.loadCategories();
            }
        );
    }

    deactivateCategoryAction(categoryId){
        // Get Stored token
        let token = localStorage.getItem('token');
        this.adminApiService.deactivateCategory(categoryId, token).subscribe(
            result => {
                this.loadCategories();
            }
        );
    }

    activateCategoryAction(categoryId){
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.activateCategory(categoryId, token).subscribe(
            result => {
                this.loadCategories();
            }
        );
    }
}
