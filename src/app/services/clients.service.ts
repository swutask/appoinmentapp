import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from './config';
import 'rxjs/add/operator/toPromise';

export class Client {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    street: string;
    zip: string;
    city: string;
    country: string;
    company: string;
    status: boolean;
    email: string;
    fax: string;
    companyID: string;
}

@Injectable()
export class ClientsService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private usersUrl = Config.apiUrl + '/clients';  // URL to web api
  private body = {};
  constructor(private http: Http) { 

    // console.log("2222222", JSON.parse(localStorage.getItem('currentUser')).token);

  }

  getClients(id: string): Promise<Client[]> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
  }
   getAllClients(): Promise<Client[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json() )
               .catch(this.handleError);
  }
  
  getClient(id: number): Promise<Client> {
    const url = `${this.usersUrl}/${id}`;
      return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Client)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url,  {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create( Object ): Promise<Client> {
    
    return this.http
      .post(this.usersUrl, JSON.stringify(Object), { headers: this.headers })
      .toPromise()
      .then(res => res.json() as Client)
      .catch(this.handleError);
  }

  update(user, id: string): Promise<Client> {
    const url = `${this.usersUrl}/${id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  removeClientByCompany(companyID, id) {

   const url = `${this.usersUrl}/${id}/${companyID}`;
    return this.http
      .put(url, '', { headers: this.headers })
      .toPromise()
      .then(res=> res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
