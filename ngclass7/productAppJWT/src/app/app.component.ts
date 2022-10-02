import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productAppJWT';
  LogOut(){
    console.log(localStorage.getItem('token'));
    localStorage.removeItem('token');
    console.log(localStorage.getItem('token'));
  }
}
