import { ProductsService } from './../Service/products.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 result:any
 selectedProduct:any
  constructor(private route:ActivatedRoute,private products:ProductsService ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.products.getData().subscribe((data)=>{
      this.result =data
      console.log(this.result);


      for(let r of this.result.data ){
        if(r.id===id)
        this.selectedProduct=r;
        console.log(this.selectedProduct,"selectedProduct")
      }
    })
  }
  editProduct(form:NgForm){
    this.products.updateData(this.selectedProduct.id,form.value).subscribe((res)=>{
      console.log(res);

    })
  }


}
