import { FeedbackComponent } from './components/pages/feedback/feedback.component';
import { HowToPayComponent } from './components/pages/how-to-pay/how-to-pay.component';
import { CancellationPolicyComponent } from './components/pages/cancellation-policy/cancellation-policy.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { CarRentalComponent } from './components/pages/car-rental/car-rental.component';
import { InternationalPackagesComponent } from './components/pages/international-packages/international-packages.component';
import { DomesticPackagesComponent } from './components/pages/domestic-packages/domestic-packages.component';
import { AllDestinationsComponent } from './components/pages/all-destinations/all-destinations.component';
import { AllCategoriesComponent } from './components/pages/all-categories/all-categories.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DestinationComponent } from './components/pages/destination/destination.component';
import { CategoryComponent } from './components/pages/category/category.component';
import { FDCategoryComponent } from './components/pages/category/fdcategory.component';
import { SearchResultComponent } from './components/pages/search-result/search-result.component';
import { PackageComponent } from './components/pages/package/package.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixedDepartureComponent } from './components/pages/fixed-departure/fixed-departure.component';
import { PilgrimageComponent } from './components/pages/pilgrimage/pilgrimage.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HotelsComponent } from './components/pages/hotels/hotels.component';
import { ThankyouComponent } from './components/pages/thankyou/thankyou.component';
import { TestimonialListComponent } from './components/pages/testimonial-list/testimonial.component';
import { WrongRouteComponent } from './components/pages/wrongroute/wrongroute.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'search',
        component: SearchResultComponent
    },
    {
        path: 'categories',
        component: AllCategoriesComponent
    },
    {
        path: 'destinations',
        component: AllDestinationsComponent
    },
    {
        path: 'category/:categorySlug',
        component: CategoryComponent
    },
    {
        path: 'fdcategory/:categorySlug',
        component: FDCategoryComponent
    },
    {
        path: 'destination/:destinationSlug',
        component: DestinationComponent
    },
    {
        path: 'package/:packageID',
        component: PackageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'cancellation-policy',
        component: CancellationPolicyComponent
    },
    {
        path: 'how-to-pay',
        component: HowToPayComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path: 'thankyou/:packageName',
        component: ThankyouComponent
    },
    {
        path: 'fixed-departure',
        component: FixedDepartureComponent
    },
    {
        path: 'domestic-packages',
        component: DomesticPackagesComponent
    },
    {
        path: 'international-packages',
        component: InternationalPackagesComponent
    },
    {
        path: 'pilgrimage',
        component: PilgrimageComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'hotels',
        component: HotelsComponent
    },
    {
        path: 'car-rental',
        component: CarRentalComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'testimonial',
        component: TestimonialListComponent
    },
    // { path: '**', redirectTo: '/404', pathMatch: 'full' },
    {
        path: '404',
        component: WrongRouteComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
