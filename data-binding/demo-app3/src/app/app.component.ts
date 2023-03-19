import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrl: string = 'assets/logo.png';

  noOfColumns = 2;
  noOfRows = 2;

  applyClass = false;

  applyStyle = false;

  styleObj1 = {
    backgroundColor: 'orange',
    color: 'black'
  };

  styleObj2 = {
    backgroundColor: 'greenyellow',
    color: 'white'
  }

  courseName: string = "Angular";

  name: string = "Angular";

  updateCourse(course){
    this.courseName = course;
  }

  reset(){
    this.courseName = "Angular";
  }
}
