import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { response } from 'express';
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
  cartItems: Product[] = [];

  constructor(public cartService: MainService) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }


}
