import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
listProduct!:any
id!:any
  constructor(private productservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
  this.productservice.getProduct().subscribe(
    (d)=>{this.listProduct=d}
  );
  }




}
