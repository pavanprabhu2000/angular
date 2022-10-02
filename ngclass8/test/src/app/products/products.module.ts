import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { PriceComponent } from './price/price.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ProductsComponent,
    DescriptionComponent,
    PriceComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'products', component: ProductsComponent },
    { path: 'product-home', component: HomeComponent},
    { path: 'product-desc', component:DescriptionComponent  },
    { path: 'product-price', component: PriceComponent }])
  ],
  // exports:[ProductsComponent]
})
export class ProductsModule { }
