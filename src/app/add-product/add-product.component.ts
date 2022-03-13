import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product!:Product
  constructor(private productservice:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.product=new Product()
  }
  save(){
    this.productservice.postProduct(this.product).subscribe(
      // ()=>this.listProduct=[this.product,...this.listProduct]
      ()=>{
        this.router.navigate(['listProduct'])
      }
    )
  }
}
