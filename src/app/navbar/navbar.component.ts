import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit{

  constructor(public services1:MainService) { }
   number1:any
  submit(){
    localStorage.clear();
    this.services1.number = 0;
    console.log("yes its working")
  }
ngOnInit() {
  
}
  

}