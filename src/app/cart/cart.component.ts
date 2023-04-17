import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartProducts:any=[]
token:any
  constructor(public cartService: MainService,private auth:AuthService) {
       
  }
  
  ngOnInit() {
    this.token=this.auth.tokens

   this.cartProducts=this.cartService.cartProducts
   console.log(this.cartProducts)
   }
   getTotalAmount() {
    let total = 0;
    for (let i = 0; i < this.cartProducts.length; i++) {
      total += this.cartProducts[i].price;
    }
    return total.toFixed(2);
  }
  
  }




