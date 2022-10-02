import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  result:any
  selectedProduct:any
  constructor(private route:ActivatedRoute,private products:ProductsService,private router:Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['_id'];
    this.products.getData().subscribe((data)=>{
      this.result =data


      for(let r of this.result.products ){
        if(r._id===id)
        this.selectedProduct=r;
        console.log(this.selectedProduct)
      }
    })
  }
  editProduct(form:NgForm){
    this.products.updateData(this.selectedProduct._id,form.value).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['products']);
      this.products.getData().subscribe((data)=>{
        this.result=data;
      })

    })
  }

}
