import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Blog } from '../model/blog';

@Injectable()
export class BlogService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private strUrl = 'api/blogs';
  constructor(private http: Http) { }

  //获取blogs列表
  getBlogs() {
    return this.http.get(this.strUrl)
      .toPromise().then(response => response.json().data)
      .catch(this.handleError);
  }

  //依据id获取blog
  getBlog(id: number) {
    const url = `${this.strUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  update(hero: Blog): Promise<Blog> {
    const url = `${this.strUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  

  create(blogObj: string): Promise<Blog> {
    return this.http
      .post(this.strUrl, blogObj, { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Blog)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.strUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
