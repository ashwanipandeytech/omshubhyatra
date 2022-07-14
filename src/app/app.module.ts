import { AuthGuard } from './guard/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';

import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AdminModule } from './admin/admin.module';

import { TopNavigationComponent } from './components/layout/top-navigation/top-navigation.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PackageCardOneComponent } from './components/layout/package-card-one/package-card-one.component';
import { PackageComponent } from './components/pages/package/package.component';
import { HeaderSliderComponent } from './components/layout/header/header-slider/header-slider.component';
import { HeaderBannerComponent } from './components/layout/header/header-banner/header-banner.component'
import { ItineraryCardComponent } from './components/layout/itinerary-card/itinerary-card.component';
import { SearchResultComponent } from './components/pages/search-result/search-result.component';
import { CategoryCardComponent } from './components/layout/category-card/category-card.component';
import { ParallaxBannerComponent } from './components/layout/parallax-banner/parallax-banner.component';
import { DestinationCardComponent } from './components/layout/destination-card/destination-card.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { FDCategoryComponent } from './components/pages/category/fdcategory.component';
import { TestimonialListComponent } from './components/pages/testimonial-list/testimonial.component';
import { TestimonialSlideComponent } from './components/layout/testimonial-slide/testimonial-slide.component';
import { DestinationComponent } from './components/pages/destination/destination.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { CategoryCarousalComponent } from './components/layout/carousals/category-carousal/category-carousal.component';
import { SpecialPackagesComponent } from './components/layout/special-packages/special-packages.component';
import { SpecialPackageCardComponent } from './components/layout/special-package-card/special-package-card.component';
import { SpecialPackageCarousalComponent } from './components/layout/special-package-carousal/special-package-carousal.component';
import { TestimonialsComponent } from './components/layout/testimonials/testimonials.component';
import { AllCategoriesComponent } from './components/pages/all-categories/all-categories.component';
import { AllDestinationsComponent } from './components/pages/all-destinations/all-destinations.component';
import { EnquiryComponent } from './components/layout/enquiry/enquiry.component';
import { FixedDepartureComponent } from './components/pages/fixed-departure/fixed-departure.component';
import { DomesticPackagesComponent } from './components/pages/domestic-packages/domestic-packages.component';
import { InternationalPackagesComponent } from './components/pages/international-packages/international-packages.component';
import { PilgrimageComponent } from './components/pages/pilgrimage/pilgrimage.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { CarRentalComponent } from './components/pages/car-rental/car-rental.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { CancellationPolicyComponent } from './components/pages/cancellation-policy/cancellation-policy.component';
import { HowToPayComponent } from './components/pages/how-to-pay/how-to-pay.component';
import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { ThankyouComponent } from './components/pages/thankyou/thankyou.component';
import { EnquirySidebarComponent } from './components/layout/enquiry-sidebar/enquiry-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PackageCardOneComponent,
    PackageComponent,
    HeaderSliderComponent,
    HeaderBannerComponent,
    ItineraryCardComponent,
    SearchResultComponent,
    CategoryCardComponent,
    ParallaxBannerComponent,
    DestinationCardComponent,
    CategoryComponent,
    FDCategoryComponent,
    TestimonialListComponent,
    TestimonialSlideComponent,
    DestinationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CategoryCarousalComponent,
    SpecialPackagesComponent,
    SpecialPackageCardComponent,
    SpecialPackageCarousalComponent,
    TestimonialsComponent,
    AllCategoriesComponent,
    AllDestinationsComponent,
    EnquiryComponent,
    FixedDepartureComponent,
    DomesticPackagesComponent,
    InternationalPackagesComponent,
    PilgrimageComponent,
    GalleryComponent,
    HotelsComponent,
    CarRentalComponent,
    PrivacyPolicyComponent,
    CancellationPolicyComponent,
    HowToPayComponent,
    FeedbackComponent,
    ThankyouComponent,
    EnquirySidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
      ApiService,
      AuthService,
      AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
