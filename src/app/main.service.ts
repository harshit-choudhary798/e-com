import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainService {
  apiUrl = 'https://fakestoreapi.com/products';
  number = 0;
  cartProducts: Product[] = [];
   

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
  

  cartId(id: number) {
    this.http.get<Product>(`${this.apiUrl}/${id}`).subscribe({
      next: (data: Product) => {
        this.cartProducts.push(data);
        console.log(this.cartProducts);
        
      }

    });
  }
  
}
