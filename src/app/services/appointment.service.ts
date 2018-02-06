import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from "./config";

export class Appointment {
   calendarID: string;
   clientID: string;
   serviceID: string;
   companyID: string;
   type: string;
   start: string;
   end: string;
   duration: string;
}

@Injectable()
export class AppointmentService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private calendarUrl = Config.apiUrl + '/appointment';  // URL to web api
  private body = {};
  static newCalendar: Appointment;
  constructor(private http: Http) { }

  // getAppointments(id: string, calendarID: string, serviceID): Promise<Appointment[]> {
  //   let url = '';
  //   if (calendarID === undefined && serviceID === undefined) {
  //     url = `${this.calendarUrl}/${id}`;
  //   } else if (calendarID === undefined && serviceID !== undefined) {
  //     url = `${this.calendarUrl}/${id}/${serviceID}`;
  //   } else if ( calendarID !== undefined && serviceID === undefined ) {
  //     url = `${this.calendarUrl}/${id}/${calendarID}`;
  //   } else if ( calendarID !== undefined && serviceID !== undefined ) {
  //     url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;
  //   }

  //   return this.http.get(url)
  //              .toPromise()
  //              .then(response => response.json() as Appointment[])
  //              .catch(this.handleError);
  // }

    getAppointments(id: string): Promise<Appointment[]> {
    // let url = '';
    // if (calendarID === undefined && serviceID === undefined) {
     const url = `${this.calendarUrl}/${id}`;
    // } else if (calendarID === undefined && serviceID !== undefined) {
    //   calendarID = "abc";
    //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;
    // } else if ( calendarID !== undefined && serviceID === undefined ) {
    //   serviceID = "abc";
    //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;
    // } else if ( calendarID !== undefined && serviceID !== undefined ) {
    //   url = `${this.calendarUrl}/${id}/${calendarID}/${serviceID}`;
    // }

    // console.log(url);

    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Appointment[])
               .catch(this.handleError);
  }

  delete(id: number, companyID: string): Promise<void> {
    const url = `${this.calendarUrl}/${id}/${companyID}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => res => res.json() as Appointment)
      .catch(this.handleError);
  }

  create(object: Appointment): Promise<Appointment> {
    return this.http
      .post(this.calendarUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Appointment)
      .catch(this.handleError);
  }

  update(object: Appointment, id: string, companyID: string): Promise<Appointment> {
    const url = `${this.calendarUrl}/${id}/${companyID}`;
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
