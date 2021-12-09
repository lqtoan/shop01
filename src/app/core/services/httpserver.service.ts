import { IProduct } from './../../modules/product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private API = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<IProduct[]> {
    const url = `${this.API}/products`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
