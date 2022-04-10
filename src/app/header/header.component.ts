import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  verif = true;
 size: number = 16;
  constructor() { }

  ngOnInit(): void {
  }

}
