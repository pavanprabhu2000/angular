import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListBoardComponent } from './todo-list-board/todo-list-board.component';
import { HttpClientModule } from '@angular/common/http';
import { ListFalseComponent } from './list-false/list-false.component';
import { ListTrueComponent } from './list-true/list-true.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListBoardComponent,
    ListFalseComponent,
    ListTrueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
