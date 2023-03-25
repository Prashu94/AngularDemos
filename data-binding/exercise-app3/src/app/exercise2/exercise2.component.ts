import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  age!: number
  belowText: string = "";
  category: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    if (this.age >= 21) {
      this.category = "an Adult"
    } else if (this.age >= 13 && this.age < 21) {
      this.category = "a Teenager"
    } else {
      this.category = "a Kid"
    }
    this.belowText = `You were born in ${new Date().getFullYear() - this.age} \n
                      You are ${this.category}`
  }
}
