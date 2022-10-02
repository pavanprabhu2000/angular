import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {


   }
   addUser(user:any){
    return this.http.post("https://ty-shop-token.herokuapp.com/api/users/register",user);
   }

   //user login
   loginUser(user:any){
        return this.http.post("https://ty-shop-token.herokuapp.com/api/users/login",user);
   }

}
