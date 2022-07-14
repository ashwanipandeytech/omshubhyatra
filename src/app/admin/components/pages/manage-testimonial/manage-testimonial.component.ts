import { Component, OnInit } from '@angular/core';
import { Testimonial } from './../../../../models/testimonial.model';
import { ApiService } from 'src/app/services/api.service';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-manage-testimonial',
  template: `
    <div class="sidebar-container">
        <app-sidenav></app-sidenav>
            
        <div class="right-content min-vh-100">
            <div class="container-fluid">
                <app-page-title [title]="'Manage Home Testimonials'" [icon]="'fa-plus'" [button]="'Add Testimonial'" [url]="'/admin/testimonial/add'"></app-page-title>

                <div class="row">
                    <div class="col-12">
                        <div class="card shadow">
                        <div class="card-body">
                        <table *ngIf="testimonials" datatable class="row-border hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Testimonial</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr *ngFor="let testimonial of testimonials">
                                    <td><img src="{{ testimonial.Image }}" width="80px"/></td>
                                    <td>{{ testimonial.Name }}</td>
                                    <td>{{ testimonial.Address }}</td>
                                    <td>{{ testimonial.Testimonial }}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm"
                                            [swal]="{ 
                                                icon: 'warning',
                                                title: 'Delete Testimonial',
                                                html: 'Are you sure you want to delete <br/>&quot;<strong>' + testimonial.Name + '</strong>&quot;',
                                                confirmButtonColor: '#D60D45',
                                                confirmButtonText: 'Yes, delete it!',
                                                showCancelButton: true,
                                                cancelButtonColor: '#535C68'
                                            }"
                                            (confirm)="deleteTestimonialAction(testimonial._id)"
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
export class ManageTestimonialComponent implements OnInit {
    testimonials: Testimonial[];

    constructor(private apiService: ApiService, private adminApiService: AdminService) { }

    ngOnInit(): void {
        this.loadTestimonials();
    }

    loadTestimonials(){
        this.apiService.getAllTestimonials().subscribe(response => {
            this.testimonials = response;
        });
    }

    deleteTestimonialAction(testimonialId){
        // Get Stored token
        let token = localStorage.getItem('token');

        this.adminApiService.deleteTestimonial(testimonialId, token).subscribe(
            result => {
                this.loadTestimonials();
            }
        );
    }
}
