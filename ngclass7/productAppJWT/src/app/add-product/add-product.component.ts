import { ProductsService } from './../Services/products.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
  }
  addProduct(form:NgForm){
    console.log(form.value);
    this.products.addProduct(form.value).subscribe((res)=>{
      console.log(res);

    })

  }

}
