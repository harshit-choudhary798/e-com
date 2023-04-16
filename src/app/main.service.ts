import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl = 'https://fakestoreapi.com/products';
  number = 0;
  private cartItems = new BehaviorSubject<Product[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  constructor(private http: HttpClient) {
    const numberStr = localStorage.getItem('number');
    if (numberStr !== null) {
      this.number = parseInt(numberStr);
    }
  }



  getProduct() {
    return this.http.get(this.apiUrl);
  }

  addOne() {
    ++this.number;
    localStorage.setItem('number', this.number.toString());
    return this.number;
  }
  
  getValue() {
    return this.number;
  }

  cartId(id: number) {
     this.http.get(`${this.apiUrl}/${id}`).subscribe({
      next:(response:any)=>{
        response as Product[]
       
      }
     })
    return this.http.get<string>(`${this.apiUrl}/${id}`);
  }
  addToCart(product: Product) {
    const currentCartItems = this.cartItems.getValue();
    const newCartItems = [...currentCartItems, product];
    this.cartItems.next(newCartItems);
  }

  clearCart() {
    this.cartItems.next([]);
  }
  
}
