import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  count: any = 0;
  private mySub: any;
  constructor() { }
  ngOnInit(): void {
    //promises
    const promise = new Promise((resolve) => {
      console.log("Promise has been called");
      setTimeout(() => {
        resolve("Data from promise");
      }, 1000);
    })
    promise.then(result => {
      console.log(result);
    })
    const observable = new Observable((sub) => {
      console.log("Observable has been called");
      // setTimeout(() => {
      //   sub.next("Data from observable");
      // }, 1000);
      setInterval(() => {
        sub.next("Data " + this.count++ +" from observale server");
      }, 1000);
    })
    //Listening to the observable
    this.mySub = observable.subscribe((res) => {
      console.log(res);
    })
  }
  ngOnDestroy(): void {
    console.log("Home component has been destroyed");
    this.mySub.unsubscribe();
  }
}
