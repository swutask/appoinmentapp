import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from "./config";

export class Calendar {
   description: string;
   status: boolean;
   companyID: string;
}

@Injectable()
export class CalendarService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private calendarUrl = Config.apiUrl + '/calendars';  // URL to web api
  private body = {};
  static newCalendar: Calendar;

  constructor(private http: Http) { 

  }

  getCalendars(id: string): Promise<Calendar[]> {
    const url = `${this.calendarUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Calendar[])
               .catch(this.handleError);
  }
  getStatusCalendars(id: string): Promise<Calendar[]> {
    const url = `${this.calendarUrl}/${id}/status`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Calendar[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.calendarUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => res => res.json() as Calendar)
      .catch(this.handleError);
  }

  create(object: Calendar): Promise<Calendar> {
    return this.http
      .post(this.calendarUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Calendar)
      .catch(this.handleError);
  }

  update(object: Calendar, id: string): Promise<Calendar> {
    const url = `${this.calendarUrl}/${id}`;
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
