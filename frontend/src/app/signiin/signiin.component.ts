import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm,
} from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-signiin',
  templateUrl: './signiin.component.html',
  styleUrls: ['./signiin.component.css']
})
export class SigniinComponent implements OnInit {

  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router
  ) {
    this.angForm = this.fb.group({
      gender: ['', Validators.required],
      f_name: ['', Validators.required],
      l_name: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.minLength(1), Validators.email],
      ],
      password: ['', Validators.required],
      datenaiss: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  postdata(angForm: any) {
    this.dataService
      .userregistration(
        angForm.value.gender,
        angForm.value.f_name,
        angForm.value.l_name,
        angForm.value.email,
        angForm.value.password,
        angForm.value.datenaiss
      )
      .pipe(first())
      .subscribe(
        (data:any) => {
          if (data.message=='success') {
            this.router.navigate(['/singup']);
          }else  {
            this.message=data.message;
            this.err=true;
          }
        },
        (error) => {}
      );

  }
  message:any;
  err=false;

}
