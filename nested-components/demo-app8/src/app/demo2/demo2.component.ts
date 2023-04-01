import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  courses : any[] = [
    {courseId: 1, courseName: "Node JS"},
    {courseId: 2, courseName: "TypeScript"},
    {courseId: 3, courseName: "Angular"},
    {courseId: 4, courseName: "React JS"}
  ];

  @Input() 
  cName:string='';

  constructor() { }

  ngOnInit(): void {
  }

  
}
