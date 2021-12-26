import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  private PRODUCT_API = `${environment.API}/products/`;
  private CATEGORY_API = `${environment.API}/categories/`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  public getCategories(): Observable<Category[]> {
    const url = `${this.CATEGORY_API}`;
    return this.httpClient.get<Category[]>(url, this.httpOptions);
  }
}
