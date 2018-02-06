import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from "./config";

export class OpeningHours {
   monfrom: string;
   monto: string;
   tuefrom: string;
   tueto: boolean;
   wedfrom: string;
   wedto: string;
   thufrom: string;
   thuto: string;
   frifrom: string;
   frito: string;
   satfrom: string;
   satto: string;
   sunfrom: string;
   sunto: string;
   companyID: string;
}

@Injectable()
export class OpeningHoursService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private openinghoursUrl = Config.apiUrl + '/openinghours';  // URL to web api
  private body = {};
  static newOpeningHours: OpeningHours;
  constructor(private http: Http) { }

  getOpeningHourse(id: string): Promise<OpeningHours[]> {
    const url = `${this.openinghoursUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as OpeningHours )
               .catch(this.handleError);
  }

  // delete(id: number): Promise<void> {
  //   const url = `${this.serviceUrl}/${id}`;
  //   return this.http.delete(url, { headers: this.headers })
  //     .toPromise()
  //     .then(() => res => res.json() as OpeningHours)
  //     .catch(this.handleError);
  // }

  // create(object: OpeningHours): Promise<OpeningHours> {
  //   return this.http
  //     .post(this.serviceUrl, JSON.stringify(object), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json() as OpeningHours)
  //     .catch(this.handleError);
  // }

  update(object: OpeningHours, id: string): Promise<OpeningHours> {
    const url = `${this.openinghoursUrl}/${id}`;
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
