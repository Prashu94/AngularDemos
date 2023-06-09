import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
  courses:any[] = [
    {courseId: 1, courseName: "Node JS"},
    {courseId: 2, courseName: "Typescript"},
    {courseId: 3, courseName: "Angular"},
    {courseId: 4, courseName: "ReactJS"}
  ];

  @Output()
  onRegister = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  register(courseName: string){
    this.onRegister.emit(courseName);
  }
}
