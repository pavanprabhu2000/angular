import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  token = localStorage.getItem('token');
  constructor(private http:HttpClient) {


  }
  getData(){
    return this.http.get("https://ty-shop-token.herokuapp.com/api/products");
  }

  // add the product detaila

  addProduct(product:any){
    return this.http.post("https://ty-shop-token.herokuapp.com/api/products", product,
  //   {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.token}`
  //   })
  // }
  );
}
updateData(_id:any,product:any){
  return this.http.put(`https://ty-shop.herokuapp.com/api/products/${_id}`, product,
//{
//     headers: new HttpHeaders({
//       'Authorization': `Bearer ${this.token}`
//   })
// }
);
}
deleteData(_id:any){
  return this.http.delete(`https://ty-shop.herokuapp.com/api/products/${_id}`
//   ,{
//     headers: new HttpHeaders({
//       'Authorization': `Bearer ${this.token}`
//   })
// }
);
}

getToken(){
  return localStorage.getItem('token');
}

}
