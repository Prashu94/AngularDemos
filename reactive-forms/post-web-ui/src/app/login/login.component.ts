import { Component, OnInit } from '@angular/core';
import { DataReadService } from './data-read.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataReadService]
})
export class LoginComponent implements OnInit {

  errorMessage: any;
  successMessage: any;


  constructor(private fb: FormBuilder, private dataRead: DataReadService) { }

  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required]
  })

  ngOnInit(): void {
  }

  login(){
    this.errorMessage = null;
    this.successMessage = null;
    console.log(this.loginForm.value);
    this.dataRead.sendData(this.loginForm.value)
    .subscribe({
      next: (success) => {console.log("Next:"+success.message); this.successMessage = success.message},
      error: (error) => { console.log("Error:"+ error.message); this.errorMessage = error.message}
    }
    )
  }

}
