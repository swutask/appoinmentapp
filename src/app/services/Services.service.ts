import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from "./config";

export class Service {
   description: string;
   price: number;
   duration: number;
   status: boolean;
   shortKey: string;
   companyID: string;
}

@Injectable()
export class ServicesService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private serviceUrl = Config.apiUrl + '/services';  // URL to web api
  private body = {};
  static newCalendar: Service;
  constructor(private http: Http) { }

  getServices(id:string): Promise<Service[]> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Service[])
               .catch(this.handleError);
  }

  getStatusServices(id:string): Promise<Service[]> {
    const url = `${this.serviceUrl}/${id}/status`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Service[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => res => res.json() as Service)
      .catch(this.handleError);
  }

  create(object: Service): Promise<Service> {
    return this.http
      .post(this.serviceUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Service)
      .catch(this.handleError);
  }

  update(object: Service, id: string): Promise<Service> {
    const url = `${this.serviceUrl}/${id}`;
    return this.http
      .put(url, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(() => object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
