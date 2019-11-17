import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  categories = []

  title = ''
  description = ''
  price = 0
  category_id = 1

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService
      .getCategories()
      .subscribe(response => {
        if (response['status'] === 'success') {
          this.categories = response['data']
        }
      })
  }

  addProduct() {
    this.productService
      .postProduct(this.title, this.description, this.price, this.category_id)
      .subscribe(response => {
        if (response['status'] === 'success') {
          alert('added product')
          this.cancel()
        }
      })
  }

  cancel() {
    this.title = ''
    this.description = ''
    this.price = 0
    this.category_id = 1
  }

}
