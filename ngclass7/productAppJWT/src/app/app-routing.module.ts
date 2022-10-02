import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"reg",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:ProductDetailsComponent},
  {path:"add-products",component:AddProductComponent},
  {path:"edit-product/:_id",component:EditProductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
