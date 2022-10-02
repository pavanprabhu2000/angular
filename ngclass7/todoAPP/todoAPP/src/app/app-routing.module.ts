import { ListTrueComponent } from './list-true/list-true.component';
import { TodoListBoardComponent } from './todo-list-board/todo-list-board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFalseComponent } from './list-false/list-false.component';

const routes: Routes = [
  {path:"show",component:TodoListBoardComponent},
  {path:"showtrue",component:ListTrueComponent},
  {path:"showfalse",component:ListFalseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
