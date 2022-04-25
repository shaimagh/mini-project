import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private dataService: ApiService) { }

  ngOnInit(): void {
  }
  cart:any[]=[];
  addToCart(item:any){
    this.cart.push(item);
    var obj=JSON.stringify(this.cart);
    console.log(obj);
    localStorage.setItem('cart',obj);
  }

}
