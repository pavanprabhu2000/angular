import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  salesProduct =[
    {name:"laptop1",price:12006,description:"d1ell",id:"p001"},
    {name:"laptop2",price:12005,description:"de1ll",id:"p1001"},
    {name:"laptop3",price:12050,description:"del1l",id:"p0011"},
    {name:"laptop4",price:12200,description:"dell1",id:"p0101"},
  ]

  salesProduct1 =[
    {name:"laptop5",price:120066,description:"d21ell",id:"p0012"},
    {name:"laptop6",price:120065,description:"de21ll",id:"p10201"},
    {name:"laptop7",price:120650,description:"del21l",id:"p02011"},
    {name:"laptop8",price:122200,description:"dell21",id:"p20101"},
  ]

}
