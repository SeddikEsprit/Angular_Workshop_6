import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
url='http://localhost:3000/products'
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get(this.url)
  }
  postProduct(p:Product){
    return this.http.post(this.url,p)
  }
  getProductById(id:any){
  return this.http.get(this.url+'/'+id)
  }
  removeProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }
  updateProduct(id:any,p:Product){
    return this.http.put('http://localhost:3000/products/'+id,p)
  }
}
