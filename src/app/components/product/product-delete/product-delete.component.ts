import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: null,
    name: "",
    price: null
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService
      .getById(id)
      .subscribe(product => {
        this.product = product;
      })
  }

  delete(): void {
    this.productService
      .delete(this.product.id)
      .subscribe(() => {
        this.productService.showMessage("Excluído com sucessso!");
        this.router.navigate(["/products"]);
      })
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

}
