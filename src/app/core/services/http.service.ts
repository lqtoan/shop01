import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  private PRODUCT_API = 'https://learn-api-v1.herokuapp.com/api/products/';
  private CATEGORY_API = 'https://learn-api-v1.herokuapp.com/api/categories/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  // ?_embed=products
  public getCategories(): Observable<Category[]> {
    const url = `${this.CATEGORY_API}`;
    return this.httpClient.get<Category[]>(url, this.httpOptions);
  }

  // thêm: ?_expand=category :nếu muốn lấy thêm thông tin Category trong Product
  public getProducts(): Observable<Product[]> {
    const url = `${this.PRODUCT_API}?_expand=category`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }

  public getProductsByCategory(categoryId: string): Observable<Product[]> {
    const url =
      `${this.PRODUCT_API}?_expand=category&categoryId=${categoryId}`;
    return this.httpClient.get<Product[]>(url, this.httpOptions);
  }
  // Solution 2
  // public getCategoryDetails(categoryId: string): Observable<Category> {
  //   const url =
  //     `${this.CATEGORY_API}?_embed=products&id=${categoryId}`;
  //   return this.httpClient.get<Category>(url, this.httpOptions);
  // }

  public getProductById(id: string): Observable<Product> {
    const url = `${this.PRODUCT_API}/` + id;
    return this.httpClient.get<Product>(url, this.httpOptions);
  }
}
