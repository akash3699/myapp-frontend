import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://192.168.1.87:4000/product'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.url)
  }

  postProduct(title, description, price, category_id) {
    const body = {
      title: title,
      description: description,
      price: price,
      category_id: category_id
    }

    return this.http.post(this.url, body)
  }
}
