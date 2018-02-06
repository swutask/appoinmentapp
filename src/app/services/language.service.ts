import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LanguageService{

    constructor(private http: Http) {

    }

    public getDEJSON(): Promise<any> {
         return this.http.get("../assets/i18n/DE/de.json")
                         .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);

     }
    public getENJSON(): Promise<any> {
         return this.http.get("../assets/i18n/DE/en.json")
                         .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);

     }
     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}