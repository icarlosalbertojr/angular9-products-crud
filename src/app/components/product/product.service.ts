import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products";

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(message: string, isError: boolean = false) {
    this.snackBar
      .open(message, 'X', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["snackBar-error"] : ["snackBar-success"]
      })
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product).pipe(
      map(data => data),
      catchError(e => this.errorHandler(e))
    );
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).pipe(
      map(data => data),
      catchError(e => this.errorHandler(e))
    );
  }

  getById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map(data => data),
      catchError(e => this.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
      map(data => data),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(
      map(data => data),
      catchError(e => this.errorHandler(e))
    );
  }

  private errorHandler(error: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}
