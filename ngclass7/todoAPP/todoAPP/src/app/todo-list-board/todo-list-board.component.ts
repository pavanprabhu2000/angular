import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../Services/todo-service.service';

@Component({
  selector: 'app-todo-list-board',
  templateUrl: './todo-list-board.component.html',
  styleUrls: ['./todo-list-board.component.css']
})
export class TodoListBoardComponent implements OnInit {
result:any
  constructor(private product:TodoServiceService) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data)=>{
      this.result=data;

    })
  }

}
