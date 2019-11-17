import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://192.168.1.87:4000/category'

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.url)
  }
}
