import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { users } from '../app/users';
import { empty } from 'rxjs';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  redirectUrl!: string;
  baseUrl: string = 'http://localhost/angulardb/';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient: HttpClient) {}
  public userregistration(
    gender: any,
    f_name: any,
    l_name: any,
    email: any,
    password: any,
    datenaiss: any
  ) {
    return this.httpClient
      .post<any>(this.baseUrl + '/register.php', {
        gender,
        f_name,
        l_name,
        email,
        password,
        datenaiss,
      })
      .pipe(
        map((users) => {
          return users;
        })
      );
  }
  public userlogin(data: any) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', data).pipe(
      map((users: any) => {
        var obj = JSON.stringify(users.data);
        //console.log(users.email);
        this.setToken(obj);
        this.getLoggedInName.emit(true);
        return users;
      })
    );
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }
  update(data: any) {
    return this.httpClient.put(this.baseUrl + '/update.php', data);
  }
  getAllProduits(){
    return this.httpClient.get(this.baseUrl+'produit.php');
  }

}
