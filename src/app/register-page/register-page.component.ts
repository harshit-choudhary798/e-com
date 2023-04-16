import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {


  form= new FormGroup({
    'name': new FormControl('',Validators.required),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',Validators.required)
  })
  


  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('username')
  }
  get password(){
    return this.form.get('password')
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
