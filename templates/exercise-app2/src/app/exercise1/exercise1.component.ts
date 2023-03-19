import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {
  courseName = "";
  constructor() { }

  ngOnInit(): void {
  }

  changeCourse(courseName){
    if(isNaN(courseName)){
      this.courseName = `You are searching for : ${courseName}`
    }else{
      this.courseName = ""
    }
  }
}
