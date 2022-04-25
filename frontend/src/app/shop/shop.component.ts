import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
    this.produit();

  }

  article:any;
  produit(){
    this.dataService.getAllProduits().subscribe((data:any)=>{
      console.log(data)
    this.article=data.data;
    });

  }
  cart : any[] = [] ;

  addToCart(item : any){
    this.cart.push(item) ;
    var obj = JSON.stringify(this.cart);
    console.log(obj);
    localStorage.setItem('cart' , obj) ;

  }
}
