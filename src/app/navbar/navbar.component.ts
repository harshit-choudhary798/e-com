import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements  OnInit{

  constructor(public services1:MainService,public auth:AuthService) { }
   number1:any
    token:any

  submit(){
    localStorage.clear();
    this.services1.number = 0;
    console.log("yes its working")
  }
ngOnInit() {

  }
}
  

