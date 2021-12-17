import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private PRODUCT_API = 'https://learn-api-v1.herokuapp.com/api/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_API}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  // public getProductsByPagination(page: string): Observable<any> {
  //   const url = `${this.PRODUCT_API}?_limit=` + page;
  //   return this.httpClient.get<any>(url, this.httpOptions);
  // }

  public getProductById(id: string): Observable<Product> {
    const url = `${this.PRODUCT_API}/` + id;
    return this.httpClient.get<Product>(url, this.httpOptions);
  }
}
