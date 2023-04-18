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

      if(response.user?.emailVerified===true){
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
        this.tokens = localStorage.getItem('token') === 'true';
      }else{
        this.router.navigate(['/verify'])
      }

    
      
      
     
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
      if(user.emailVerified){
        this.router.navigate(['/login']);
      }
    }).catch((error:any) => {
      console.log(error);
    });
  }
}