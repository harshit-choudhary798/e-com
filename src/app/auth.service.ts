import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth,private router: Router) { }

  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true')
      this.router.navigate(['/home']);
    }).catch(()=>{
      this.router.navigate(['/register']);
    })
  }

  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then(()=>{
      this.router.navigate(['/login']);
    }).catch(()=>{
      
      this.router.navigate(['/home']);
    })
  }
}
