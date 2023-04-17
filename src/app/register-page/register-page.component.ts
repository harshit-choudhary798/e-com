import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({ 
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {


  form= new FormGroup({
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',Validators.required)
  })
  


 
  get email(){
    return this.form.get('email')
  }
  get password(){
    return this.form.get('password')
  }


  constructor(private auth:AuthService) {

   }
   submit(){
    if (this.email?.value && this.password?.value) {
      this.auth.register(this.email.value, this.password.value);
    }
  }

  ngOnInit(): void {
  }

}
