import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  verif = true;
  constructor(private dataService: ApiService, private router: Router) {}

  user = localStorage.getItem('token');
  gender: any;
  l_name: any;
  f_name: any;
  email: any;
  password: any;
  datenaiss: any;

  affiche() {
    if (this.user) {
      if (JSON.parse(this.user)[0].gender == 'M') {
        this.gender = 'M';
      } else if (JSON.parse(this.user)[0].gender == 'Mme') {
        this.gender = 'Mme';
      }
      this.l_name = JSON.parse(this.user)[0].l_name;
      this.f_name = JSON.parse(this.user)[0].f_name;
      this.email = JSON.parse(this.user)[0].email;
      this.password = JSON.parse(this.user)[0].password;
      this.datenaiss = JSON.parse(this.user)[0].datenaiss;
    }
  }
  objUser: any;
  obj = {
    idClient: '',
    gender: '',
    f_name: '',
    l_name: '',
    email: '',
    password: '',
    datenaiss: '',
  };

  succes: any;

  msg = false;
  updateData() {
    if (this.user) {
      this.objUser = JSON.parse(this.user);
      this.obj = {
        idClient: this.objUser[0].idClient,
        gender: this.gender,
        f_name: this.f_name,
        l_name: this.l_name,
        email: this.email,
        password: this.password,
        datenaiss: this.datenaiss,
      };
      this.dataService.update(this.obj).subscribe((res: any) => {
        console.log(res);
        this.succes=res.message;
        this.msg=true;
      });
    }
  }

  ngOnInit(): void {
    this.affiche();
  }
}
