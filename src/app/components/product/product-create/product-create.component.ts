import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createProduct() {
    this.productService.save(this.product).subscribe(() => {
      this.productService.showMessage("Produto cadastrado com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

}
