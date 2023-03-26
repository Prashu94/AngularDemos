import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {
  quotesArray = [
    "I can and I will",
    "Keep a part of yourself to yourself",
    "Be Good to people for no reason",
    "The important thing to remember is not to forget"
  ];

  selectedQuote!:string;

  count!:number;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(option: string){
    console.log(option);
    this.selectedQuote = option;
  }
}
