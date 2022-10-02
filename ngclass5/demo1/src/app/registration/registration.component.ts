import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  regForm = new FormGroup({
    uname:new FormControl("",[]),
    upass:new FormControl("",[])
  })

  get uname(){
    return this.regForm.get('uname');
  }
  get upass(){
    return this.regForm.get('upass');
  }
  onSubmit(){
    console.log(this.regForm.value);

  }
}
