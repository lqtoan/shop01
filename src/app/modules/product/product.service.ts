import { Product } from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  private PRODUCT_API = 'https://learn-api-v1.herokuapp.com/api/products';
  private CATEGORY_API = 'https://learn-api-v1.herokuapp.com/api/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_API}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getCategories(): Observable<Category[]> {
    const url = `${this.PRODUCT_API}`;
    return this.httpClient.get<Category[]>(url, this.httpOptions);
  }

  public getProductById(id: string): Observable<Product> {
    const url = `${this.PRODUCT_API}/` + id;
    return this.httpClient.get<Product>(url, this.httpOptions);
  }
}
