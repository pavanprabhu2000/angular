import { NgForm } from '@angular/forms';
import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imp:any;
  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }

  logUser(form:NgForm){
    this.user.loginUser(form.value).subscribe((res)=>{
        console.log(res);
        this.imp=res;
        console.log(this.imp.token);
        localStorage.setItem('token',this.imp.token);

    })
  }
}
