import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  test: any;
  erreur: boolean = false;
  constructor() {}


  ngOnInit(): void {
    this.getCartElement();
    this.calculTotal();
  }
  produit:any[]=[];
  cart=localStorage.getItem('cart');
  getCartElement(){
    if (this.cart){
      var obj=JSON.parse(this.cart)
      this.produit=obj;
    }
  }
  total:any=0;
  calculTotal(){
    this.produit.forEach((element:any)=>{
      this.total=this.total+Number(element.prix);
      console.log(this.total);
    })
  }
  clearCart(){
    localStorage.removeItem('cart');
    window.location.replace('/panier');
  }
}
