import { ProductsService } from './../Service/products.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product-sir',
  templateUrl: './add-product-sir.component.html',
  styleUrls: ['./add-product-sir.component.css']
})
export class AddProductSirComponent implements OnInit {

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
  }
addProduct(form:NgForm) {

  console.log(form.value);

  this.products.addData(form.value).subscribe((res)=>{
    console.log(res);

  })

}
}
