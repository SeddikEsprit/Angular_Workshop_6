import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailProductComponent} from "./detail-product/detail-product.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";

const routes: Routes = [
  {path:'listProduct',component:ListProductComponent},
  {path:'addProduct',component:AddProductComponent},
   {path:'listProduct/:id',component:DetailProductComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
