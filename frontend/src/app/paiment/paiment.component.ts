import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.component.html',
  styleUrls: ['./paiment.component.css']
})
export class PaimentComponent implements OnInit {

  constructor() { }
  affiche(){
    alert("félicitations!!!!    Paiement Accepté");

  }

  ngOnInit(): void {
  }

}
