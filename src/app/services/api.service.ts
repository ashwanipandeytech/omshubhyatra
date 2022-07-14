import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Package } from '../models/package.model';
import { Itinerary } from '../models/itinerary.model';
import { Category } from '../models/category.model';
import { Banner } from '../models/banner.model';
import { Offer } from '../models/offer.model';
import { Popup } from '../models/popup.model';
import { Destination } from '../models/destination.model';
import { Testimonial } from '../models/testimonial.model';
import { Seo } from '../models/seo.model';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    apiURL:string = "https://omshubhyatra.in/api";
    //apiURL:string = "http://localhost:3000/api";

    constructor(private http:HttpClient) {}

    getAllDestinations(): Observable<Destination[]> {
        return this.http.get<Destination[]>(
            `${this.apiURL}/destinations`
        );
    }

    getAllCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(
            `${this.apiURL}/categories`
        );
    }

    getAllCategoriesWeb(): Observable<Category[]> {
        return this.http.get<Category[]>(
            `${this.apiURL}/categories_web`
        );
    }

    getCategoryById(id): Observable<Category[]> {
        return this.http.get<Category[]>(
            `${this.apiURL}/categories/${id}`
        );
    }

    getCategoriesByType(id): Observable<Category[]> {
        return this.http.get<Category[]>(
            `${this.apiURL}/categories_type/${id}`
        );
    }

    getAllBanners(): Observable<Banner[]> {
        return this.http.get<Banner[]>(
            `${this.apiURL}/banners`
        );
    }

    getAllOffers(): Observable<Offer[]> {
        return this.http.get<Offer[]>(
            `${this.apiURL}/offers`
        );
    }

    getAllTestimonials(): Observable<Testimonial[]> {
        return this.http.get<Testimonial[]>(
            `${this.apiURL}/testimonial`
        );
    }

    getAllPackages(): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/packages`
        );
    }

    getSeo(): Observable<Seo[]> {
        return this.http.get<Seo[]>(
            `${this.apiURL}/seos`
        );
    }

    getSeoBySlug(slug): Observable<Seo[]> {
        return this.http.get<Seo[]>(
            `${this.apiURL}/seo_by_slug/${slug}`
        );
    }

    getPackagesByCategory(id): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/category_packages/${id}`
        );
    }

    getPackagesByCategoryFD(id): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/category_packages_fd/${id}`
        );
    }

    getPackagesByDestination(slug): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/destination_packages/${slug}`
        );
    }

    getPackage(id): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/packages/${id}`
        );
    }
    getPackageBySlug(id): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/packagebyslug/${id}`
        );
    }
    getPackageByKey(id): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/packagebykey/${id}`
        );
    }

    getOfferByNumber(id): Observable<Offer[]> {
        return this.http.get<Offer[]>(
            `${this.apiURL}/offerByNumber/${id}`
        );
    }

    getItinerary(id): Observable<Itinerary[]> {
        return this.http.get<Itinerary[]>(
            `${this.apiURL}/package_itineraries/${id}`
        );
    }

    getSearchResults(dest, type, day, price): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/packages/${dest}/${type}/${day}/${price}`
        );
    }

    submitEnquiry(enquiryData){
        return this.http.post<any>(
            `${this.apiURL}/enquiry`,
            enquiryData
        );
    }

    submitFeedback(feedbackData){
        return this.http.post<any>(
            `${this.apiURL}/feedback`,
            feedbackData
        );
    }

    getExecutionCities(category): Observable<Package[]> {
        return this.http.get<Package[]>(
            `${this.apiURL}/execution_cities/${category}`
        );
    }

    getAllPopups(): Observable<Popup[]> {
        return this.http.get<Popup[]>(
            `${this.apiURL}/popups`
        );
    }
}