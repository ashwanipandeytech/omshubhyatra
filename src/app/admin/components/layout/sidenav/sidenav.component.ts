import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  template: `
    <div class="sidenav">
        <nav>
            <ul>
                <li class="branding">
                    <img src="https://omshubhyatra.in/assets/images/logo.png" />
                </li>
                <li>
                    <a href="/admin">
                        <span class="fas fa-th-large"></span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/enquiry">
                        <span class="fas fa-paper-plane"></span>
                        <span>Enquiry</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/feedback">
                        <span class="fas fa-envelope-open-text"></span>
                        <span>Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/testimonial">
                        <span class="fas fa-star"></span>
                        <span>Testimonials</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/categories">
                        <span class="fas fa-passport"></span>
                        <span>Categories</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/packages">
                        <span class="fas fa-map"></span>
                        <span>Packages</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/itinerary">
                        <span class="fas fa-route"></span>
                        <span>Itinerary</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/banners">
                        <span class="fas fa-image"></span>
                        <span>Home Banners</span>
                    </a>
                </li>
               <li *ngIf="_isAdmin">
                    <a href="/admin/offers">
                        <span class="fas fa-gift"></span>
                        <span>Home Offers</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/popups">
                        <span class="fas fa-file"></span>
                        <span>Home Popups</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/users">
                        <span class="fas fa-user-circle"></span>
                        <span>Users</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/settings">
                        <span class="fas fa-cog"></span>
                        <span>Settings</span>
                    </a>
                </li>
                <li *ngIf="_isAdmin">
                    <a href="/admin/seos">
                        <span class="fas fa-rocket"></span>
                        <span>SEO</span>
                    </a>
                </li>
                <li>
                    <a  href="#" 
                        [swal]="{ 
                            icon: 'warning',
                            title: 'Logout',
                            html: 'Are you sure you want to logout',
                            confirmButtonColor: '#D60D45',
                            confirmButtonText: 'Yes, logout!',
                            showCancelButton: true,
                            cancelButtonColor: '#535C68'
                        }"
                        (confirm)="logoutAction()">
                        <span class="fas fa-sign-out-alt"></span>
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  `,
  styles: [
  ]
})
export class SidenavComponent implements OnInit {
    _isAdmin : Boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this._isAdmin = false;
    let role = localStorage.getItem('roleID');
    if(role === "1"){
        this._isAdmin = true;
    }
  }

  logoutAction(){
    this.router.navigate(['/admin/logout']);
  }

}
