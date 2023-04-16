import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { Observable, of } from 'rxjs';
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

  constructor(public cartService: MainService) {
          
  }
 

  ngOnInit() {
   this.cartProducts=this.cartService.cartProducts
   console.log(this.cartProducts)
   }
  }




