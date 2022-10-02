import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  result:any
  constructor(private product:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data)=>{
      this.result = data;
    })
  }
  deleteProduct(_id:any){
    this.product.deleteData(_id).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['products']);
      this.product.getData().subscribe((data)=>{
        this.result=data;
      })

    })
   }
  }

