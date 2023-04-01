import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  courses = [
    {courseId: 1, courseName: 'Node JS'},
    {courseId: 2, courseName: 'TypeScript'},
    {courseId: 3, courseName: 'Angular'},
    {courseId: 4, courseName: 'React JS'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
