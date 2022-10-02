import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy ,OnChanges{
  count =0;
  interval:any
  @Input() userName:any

  constructor() {
    // console.log("the constructor of the child component has been called");
    // this.interval = setInterval(()=>{
    //   this.count++
    //   console.log(this.count);

    // },1000)

  }

  ngOnInit(): void {
    console.log("onit of the child  component has been called");
  }
  ngOnDestroy(): void {
     console.log("child destroyed");
    // console.log(this.interval);

    //clearInterval(this.interval)

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes has benn implemented inn child");

  }

}
