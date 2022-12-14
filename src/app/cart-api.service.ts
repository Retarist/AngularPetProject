import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  readonly cartApiUrl = "http://localhost:3000/products";

  constructor(private http:HttpClient) { }

  getProductList():Observable<any[]> {
    return this.http.get<any>(this.cartApiUrl + '/Product');
  }
}
