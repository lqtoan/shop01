import { Product } from './../../modules/product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private PRODUCT_API = 'http://localhost:3000/product';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  public getProducts(): Observable<Product[]> {
    const params = '_page=1&_limit=8';
    const url = `${this.PRODUCT_API}?${params}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }
  public getProductById(id: string): Observable<Product> {
    const url = `${this.PRODUCT_API}/` + id;
    return this.httpClient.get<Product>(url, this.httpOptions);
  }
}
