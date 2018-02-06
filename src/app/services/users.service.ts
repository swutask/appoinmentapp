import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Config } from "./config";

import 'rxjs/add/operator/toPromise';

export class User {
    id: number;
    username: string;
    name: string;
    password: string;
    email: string;
    role: string;
    active: boolean;
    country:string;
    companyID: string;
}



@Injectable()
export class UsersService {

  
  public headers ;
  private usersUrl = Config.apiUrl+'/user';  // URL to web api
  private body = {};
  constructor(private http: Http) { 
   
  }

  getUsers(): Promise<User[]> {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    return this.http.get(this.usersUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

  login(email: string, password: string): Promise<User> {


    const url = `${this.usersUrl}/login`;
    console.log(url);
    this.body = {'email': email, 'password':password};
    return this.http.post(url,this.body).toPromise()
    .then(response =>  response.json())
    .catch(this.handleError);
    
  }

  forgot(email: string): Promise<User> {
    
    console.log(email);
    const url = `${this.usersUrl}/forgot`;
    this.body = {'email': email};
    return this.http.post(url, this.body).toPromise()
    .then(response =>  response.json())
    .catch(this.handleError);
  }

  forgotreset(email: string, password: string, code: string): Promise<User> {

    console.log(email);
    const url = `${this.usersUrl}/forgot/${code}/reset`;
    this.body = { 'email': email, 'password': password };
    return this.http.post(url, this.body).toPromise()
    .then(response =>  response.json())
    .catch(this.handleError);
  }

  changepassword(currentpassword: string, password: string): Promise<User> {

    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});

    const url = `${this.usersUrl}/changepassword`;
    this.body = { 'id': JSON.parse(localStorage.getItem('currentUser')).user._id,'currentpassword': currentpassword, 'password': password };
    return this.http.post(url, this.body, {headers: this.headers}).toPromise()
    .then(response =>  response.json())
    .catch(this.handleError);
  }

  getAdminUsers() {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    const url = `${this.usersUrl}/adminusers`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    const url = `${this.usersUrl}/${id}`;
      return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(obj): Promise<User> {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    console.log(obj);
    return this.http
      .post(this.usersUrl, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(user, id): Promise<User> {
    this.headers =  new Headers({'Content-Type': 'application/json',
                                  'authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')).token});
    const url = `${this.usersUrl}/${id}`;
    console.log(user, id);
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
