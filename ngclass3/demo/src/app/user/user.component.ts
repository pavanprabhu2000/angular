import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  persons:any
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.persons = this.users.getData();
  }

}
