import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  // External Template HTML
  templateUrl: './hello.component.html',
  // Inline Template HTML
  /*template: `
              <p>
                Hello {{courseName}}
              </p>
            `,*/
  // External Template Styles
  styleUrls: ['./hello.component.css']
  // Inline Template Styles
  //styles: [`p{color: blue;}`]
})
export class HelloComponent implements OnInit {
  courseName: string = "Angular";
  constructor() { }

  ngOnInit(): void {
  }

  // method to change the variable name once
  changeName(){
    this.courseName = "Typescript";
  }

  // method to change the courseName as per the input variable
  changeNameWithThis(course){
    this.courseName = course;
  }
}
