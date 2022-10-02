import { ProductsService } from './../Service/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  results:any
  constructor(private products:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.products.getData().subscribe((data)=>{
      this.results=data;
      console.log(this.results);

    })
  }
 deleteProduct(_id:any){
  this.products.deleteData(_id).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['products']);
    this.products.getData().subscribe((data)=>{
      this.results=data;
    })

  })
 }
}
