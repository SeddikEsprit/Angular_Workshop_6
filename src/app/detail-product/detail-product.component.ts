import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
id:any
  product!:any
  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.product=new Product()
    this.id=this.route.snapshot.params['id']
    this.productService.getProductById(this.id).subscribe(
      (d)=>{
        this.product=d
     }
    )
  }
  deleteProduct(id:any){
    this.productService.removeProduct(this.id).subscribe(
      // ()=>this.listProduct=[this.product,...this.listProduct]
      ()=>{
        this.router.navigate(['listProduct'])
      }
    )
  }
  updateProduct(id:any){
  this.router.navigate(['updateProduct/'+id])
  }

}
