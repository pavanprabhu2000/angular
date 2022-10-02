import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductSirComponent } from './add-product-sir/add-product-sir.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"products",component:ProductsDetailComponent},
  {path:"add-product-sir",component:AddProductSirComponent},
  {path:"edit-product/:id",component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
