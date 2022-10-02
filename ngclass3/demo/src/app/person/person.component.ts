import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Service/users.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons:any
  constructor(private users:UsersService) { }

  ngOnInit(): void {
    this.persons = this.users.getData();
  }
  

}
