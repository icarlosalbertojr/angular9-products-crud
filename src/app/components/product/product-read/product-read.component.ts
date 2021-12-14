import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  columnsToDisplay = ["Id", "Name", "Price", "Actions"];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.productService.getAll().subscribe(productsData => {
      this.products = productsData;
      console.log(this.products);
    })
  }

}
