import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Config } from './config';

export class Category {
    id: number;
    description: string;
    status: boolean;
  }

@Injectable()
export class CategoriesService {

  private headers = new Headers({'Content-Type': 'application/json',
                                'authorization': 'Bearer ' +JSON.parse(localStorage.getItem('currentUser')).token});
  private usersUrl = Config.apiUrl+'/categories';  // URL to web api
  private body = {};
  static newCompany: Category;
  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.usersUrl, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }

   getStatusCategories(): Promise<Category[]> {
     const url = `${this.usersUrl}/status`;
    return this.http.get(url, {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(object: Category): Promise<Category> {
    return this.http
      .post(this.usersUrl, JSON.stringify(object), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Category)
      .catch(this.handleError);
  }

  update(object: Category, id: string): Promise<Category> {
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
