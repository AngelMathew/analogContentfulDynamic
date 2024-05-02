import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export type BlogPostType = {
  title: string;
  description:string;
}
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public http:HttpClient){}
  messages: string[] = [];

  getTitle():Observable<BlogPostType[]> {
    return this.http.get<BlogPostType[]>('https://6632a993f7d50bbd9b470fcf.mockapi.io/title');
  }
}
