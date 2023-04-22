import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
tokens:any=null
  constructor(private fireAuth:AngularFireAuth,private router: Router) { }

  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((response)=>{

        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
       this.tokens = localStorage.getItem('token') === 'true';
      
        
      
    }).catch(()=>{
      this.router.navigate(['/register']);
    })
  }

  register(email:string,password:string){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then((response)=>{
      console.log(response)

      this.SendEmailForVerification(response.user)
        this.router.navigate(['/login']);
      
      
    }).catch(()=>{
      
      this.router.navigate(['/home']);
    })
  }

  SendEmailForVerification(user:any){
    user.sendEmailVerification().then(() => {
      this.router.navigate(['/verify']);

    }).catch((error:any) => {
      console.log(error);
    });
  }
}