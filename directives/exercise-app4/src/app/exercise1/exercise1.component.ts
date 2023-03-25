import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  display1: boolean=false;
  display2: boolean=false;
  display3: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
