import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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
      .subscribe(data => {
        this.product = data;
      });
  }

  updateProduct(): void {
    this.productService
      .update(this.product)
      .subscribe(() => {
        this.productService.showMessage("Atualizado com sucesso!");
        this.router.navigate(["/products"]);
      })
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
