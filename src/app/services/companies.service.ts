import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from "./config";

export class Company {
    name : string;
    email: string;
    phoneNumber: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    fax: string;
    status: boolean;
    categories: string;
    latitude: string;
    longitude: string;
    appoconfemail: boolean;
    appoconfsms: boolean;
    apponotemail: boolean;
    apponotsms: boolean;
    appoconftemplate: string;
    apponottemplate: string;
}

@Injectable()
export class CompaniesService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private usersUrl = Config.apiUrl+'/companies';  // URL to web api
  private body = {};
  static newCompany: Company;
  constructor(private http: Http) {

   }

  getCompanies(): Promise<Company[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Company[])
               .catch(this.handleError);
  }

  getCompany(email: string, password: string): Promise<Company> {
    const url = `${this.usersUrl}`;
    this.body = {'email': email, 'password':password};
    return this.http.post(url, this.body, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Company)
      .catch(this.handleError);
  }

 getCompaniesByID(id): Promise<Company> {
   const url = `${this.usersUrl}/${id}`;
  return this.http.get(url, {headers: this.headers})
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  
  }
  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => res => res.json() as Company)
      .catch(this.handleError);
  }

  create(object: Company): Promise<Company> {
    return this.http
      .post(this.usersUrl, JSON.stringify(object), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  saveNotificationPref(object: any): Promise<Company> {
    const url = `${this.usersUrl}/savenotificationpref`;
    return this.http
      .post(url, JSON.stringify(object), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Company)
      .catch(this.handleError);
  }

  update(object: Company, id: string): Promise<Company> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .put(url, JSON.stringify(object), {headers: this.headers})
      .toPromise()
      .then(() => object)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
