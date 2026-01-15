import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.map(product => ({
        ...product,
        specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : product.specs
      })))
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(product => ({
        ...product,
        specs: typeof product.specs === 'string' ? JSON.parse(product.specs) : product.specs
      }))
    );
  }
}