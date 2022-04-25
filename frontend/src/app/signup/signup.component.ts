import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  NgForm,
  FormControl,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private dataService: ApiService, private router: Router) {}
  angForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  postdata() {
    if (this.angForm.valid) {
      this.dataService
        .userlogin(this.angForm.value)
        .pipe(first())
        .subscribe((data: any) => {
          console.log(data);
          if (data.message == 'success') {
            //const redirect = this.dataService.redirectUrl? this.dataService.redirectUrl: '/home';
            this.router.navigate(['/']);

            window.location.replace('/home');
          } else {
            this.test = 'email or password invalid';
            this.erreur = true;
          }
        });
    }
  }

  ngOnInit(): void {}
  test: any;
  erreur: boolean = false;
}
