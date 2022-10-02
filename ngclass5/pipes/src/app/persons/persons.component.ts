import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
  searchString="";
  constructor() { }

  ngOnInit(): void {
  }

  users = [{
    name:"pavan",
    id:"001",
    dob:new Date("1 may 2000")
  },
  {
    name:"prabhu",
    id:"002",
    dob:new Date("2 may 2000")
  },
  {
    name:"power",
    id:"003",
    dob:new Date("1 may 2002")
  },
  {
    name:"pa",
    id:"004",
    dob:new Date("5 may 2000")
  }


]

addUser(){
  this.users.push({
    name:"vandal",
    id:"005",
    dob:new Date("15 may 2000")
  })
}
}
