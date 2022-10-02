import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges{

  flag =false;
  userName:any;
  constructor() {
    console.log("the constructor of the parent component has been called");
  }

  ngOnInit(): void {
    console.log("onit of the parent  component has been called");
  }

  toggleChild(){
    this.flag=!this.flag

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes has benn implemented inn child");

  }
}
