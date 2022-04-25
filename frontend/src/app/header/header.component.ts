import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() size: number = 16;
  loginbtn = true;
  logoutbtn = false;
  verif2() {
    if (this.user) {
      this.loginbtn = false;
      this.logoutbtn = true;
    }
  }

  constructor(private dataService: ApiService, private router: Router) {
    /*dataService.getLoggedInName.subscribe((name) => this.changeName(name));
    if (this.dataService.isLoggedIn()) {
      console.log('loggedin');
      this.loginbtn = false;
      this.logoutbtn = true;
    }*/
  }
  private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }
  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
    window.location.replace('/home');
  }

  ngOnInit(): void {
    this.verif();
    this.verif2();
  }
  notLoggedIn = true;
  loggedIn = false;
  user = localStorage.getItem('token');
  meNow: any;
  meNow2: any;
  verif() {
    if (this.user) {
      this.meNow = JSON.parse(this.user)[0].f_name;
      this.meNow2 = JSON.parse(this.user)[0].l_name;
      this.notLoggedIn = false;
      this.loggedIn = true;
    }
  }
}
