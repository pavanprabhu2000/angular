import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Services/todo-service.service';

@Component({
  selector: 'app-list-false',
  templateUrl: './list-false.component.html',
  styleUrls: ['./list-false.component.css']
})
export class ListFalseComponent implements OnInit {
  result:any;
  constructor(private product:TodoServiceService) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data)=>{
      this.result=data;

    })
  }

}
