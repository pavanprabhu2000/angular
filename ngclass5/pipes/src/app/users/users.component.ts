import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[
    {name:"hello",city:"bangalore",id:"001",sal:2000,dob:new Date("4 jul 1994")},
    {name:"bello",city:"mangalore",id:"002",sal:2001,dob:new Date("5 jul 1995")},
    {name:"aello",city:"aangalore",id:"004",sal:2007,dob:new Date("6 jul 1995")},
    {name:"cello",city:"cangalore",id:"005",sal:2008,dob:new Date("7 jul 1997")},
  ]
 user1=[{name:"hello",city:"bangalore",id:"001",sal:2000,dob:new Date("4 jul 1994")
 }]

}
