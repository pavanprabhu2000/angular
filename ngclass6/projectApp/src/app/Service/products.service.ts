import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get("http://localhost:8080/foodproduct");
  }
  addData(product:any){
    return this.http.post("http://localhost:8080/foodproduct",product)

  }

  updateData(_id:any,product:any){
    return this.http.put(`http://localhost:8080/foodproduct/${_id}`,product)

  }

  // deleting the product by using the http method

  deleteData(_id:any){
    return this.http.delete(`http://localhost:8080/foodproduct/${_id}`);
  }

}
