import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private services:MainService) { }
  submit(){
    
    this.services.sendMessage('TOKEN_ID','CHAT_ID','finally').subscribe({})
  }
  ngOnInit(): void {
  }

}
