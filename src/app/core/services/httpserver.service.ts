import { IProduct } from './../../modules/product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private PRODUCT_API = 'http://localhost:3000/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    const url = `${this.PRODUCT_API}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
