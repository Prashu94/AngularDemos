import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = false;
  courses : any[] = [
    {courseId: 1, courseName: "Node JS"},
    {courseId: 2, courseName: "TypeScript"},
    {courseId: 3, courseName: "Angular"},
    {courseId: 4, courseName: "React JS"}
  ];
  selectedOption!:string;
  message:string = "";
  onSelect(option: string){
    this.selectedOption = option;
  }
  courseRegister(courseName: string){
    this.message = `Your registration for ${courseName} is successful.`;
  }
}
