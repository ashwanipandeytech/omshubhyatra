import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    apiURL:string = "https://omshubhyatra.in/api";
    //apiURL:string = "http://localhost:3000/api";

    constructor(private http:HttpClient) { }

    loginUser(user) {
        return this.http.post<any>(
            `${this.apiURL}/login`,
            user
        );
    }

    logoutUser(token){
        return this.http.post<any>(
            `${this.apiURL}/logout`,
            {
                'key': 'value'
            },
            { 
                headers: new HttpHeaders(
                    {
                        'token': token
                    }
                )
            }
        );
    }

    isLoggedIn(){
        return !!localStorage.getItem('token');
    }
}
