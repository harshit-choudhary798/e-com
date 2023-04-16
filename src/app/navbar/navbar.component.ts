import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public services1:MainService) { }
   
  submit(){
    localStorage.clear();
    this.services1.number = 0;
    console.log("yes its working")
  }

  

}