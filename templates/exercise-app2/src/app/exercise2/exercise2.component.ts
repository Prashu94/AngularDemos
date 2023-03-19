import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  message = "";
  year = "";
  constructor() { }

  ngOnInit(): void {
  }

  checkAge(age){
    if(!isNaN(age)){
      if(age >= 21){
        this.message = "You are an adult";
        this.year = `You were born in ${new Date().getFullYear() - age}`
      }else if(age >=13 && age < 21){
        this.message = "You are a teenager";
        this.year = `You were born in ${new Date().getFullYear() - age}`
      }else{
        this.message = "You are a kid";
        this.year = `You were born in ${new Date().getFullYear() - age}`
      }
    }else{
      this.message = "";
    }
  }
}
