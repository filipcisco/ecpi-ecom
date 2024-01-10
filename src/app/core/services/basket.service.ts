import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Basket } from '../models/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) { }

  getAllBaskets(): Observable<Basket[]> {
    return this.http.get<Basket[]>(this.apiUrl);
  }

  getBasketById(id: number): Observable<Basket> {
    return this.http.get<Basket>(`${this.apiUrl}/${id}`);
  }
}
