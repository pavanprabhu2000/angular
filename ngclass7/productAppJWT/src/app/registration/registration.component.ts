import { UsersService } from './../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }
regUser(form:NgForm){
  this.user.addUser(form.value).subscribe((data)=>{
      console.log(data);
  });
}
}
