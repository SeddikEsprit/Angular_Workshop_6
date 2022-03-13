import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product!:any
  id!:number
  constructor(private productservice:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.productservice.getProductById(this.id).subscribe(
      (d)=>{
        this.product=d
      }
    )

  }
 save(){

  this.productservice.updateProduct(this.id,this.product).subscribe(
    ()=>{
      this.router.navigate(['listProduct'])
    }
  )
 }
}
