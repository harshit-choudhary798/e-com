import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
products:any
form=new FormGroup({
  name: new FormControl('',Validators.required),
  address: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required),
})
get name() {
  return this.form.get('name');
}
get address() {
  return this.form.get('address');
}
get phone() {
  return this.form.get('phone');
}

  constructor(private services:MainService,private router: Router) { }
  message:any


  submit(){
    console.log(this.form.value);
//    this.message = `Name: ${this.name?.value} \n Address: ${this.address?.value} \n Contact No.: ${this.phone?.value}\n`;
    this.message = `
    Name: ${this.name?.value}  Address: ${this.address?.value} \n Contact No.: ${this.phone?.value}
    The ordered products are:
    Product
    
   -----------------------------------
    ${this.content} \n
    Total Amount: 
    ${this.getTotalAmount()}`;
    console.log(this.message)
    this.services.sendMessage('telegram_api_key','chat_id',this.message).subscribe({})

    this.router.navigate(['/order']);


  }

  titles:any
  price:any
  content:any
  ngOnInit() {
    this.products=this.services.cartProducts
    this.products.value
    this.products.map((product:any)=>{
      this.content += ` ${product.title} : price $${product.price}`;
      
    })
    
   
  }
  getTotalAmount() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].price;
    }
    return total.toFixed(2);
  }

}
