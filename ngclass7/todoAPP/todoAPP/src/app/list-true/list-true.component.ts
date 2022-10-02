import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Services/todo-service.service';

@Component({
  selector: 'app-list-true',
  templateUrl: './list-true.component.html',
  styleUrls: ['./list-true.component.css']
})
export class ListTrueComponent implements OnInit {
 result:any;
  constructor(private product:TodoServiceService) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data)=>{
      this.result=data;

    })
  }

}
