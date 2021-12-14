import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = {
      title: "Produtos",
      icon: "storefront",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {

  }

  navigateToCreateProduct() {
    this.router.navigate(["products/create"]);
  }

}
