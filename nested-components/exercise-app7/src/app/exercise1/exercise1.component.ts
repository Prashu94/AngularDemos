import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  color:string="white";
  constructor() { }

  ngOnInit(): void {
  }
  
  onChangeColor(event: any){
    this.color = event.target.value;
  }
}
