import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  form= new FormGroup({
    'email':new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
  })

  
get email(){
  return this.form.get('email')
}
get password(){
  return this.form.get('password')
}



  constructor(private auth:AuthService) { }
  submit(){
    if (this.email?.value && this.password?.value) {
      this.auth.login(this.email!.value, this.password!.value);
    }
  }
  ngOnInit(): void {
  }

}
