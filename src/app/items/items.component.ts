import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MainService } from '../main.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private services:MainService) { }
  items:any=[]
  

  submit(id: number) {
    this.services.cartId(id)
    this.services.addOne()
    //.subscribe((product: any) => {
    //    console.log(product)
      
     
    // });
  }
  
  ngOnInit(): void {
    this.services.getProduct().subscribe({
      next:(response:any)=>{
        this.items=response 
        // console.log(response)
      }
    })
  }

}
