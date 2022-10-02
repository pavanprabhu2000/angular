import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private adpro:AddProductComponent) { }

  ngOnInit(): void {

  }
  regForm = new FormGroup({
    name:new FormControl("",[]),
    desc:new FormControl("",[]),
    price:new FormControl("",[]),
    url:new FormControl("",[]),
  })

  get name(){
    return this.regForm.get('name');
  }
  get desc(){
    return this.regForm.get("desc");
  }
  get price(){
    return this.regForm.get("price");
  }
  get url(){
    return this.regForm.get("url");
  }
  onSubmit(){
    console.log(this.regForm.value);
  }
}
