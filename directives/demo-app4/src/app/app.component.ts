import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-app';

  userName: string = '';
  password: string = '';
  loginSuccess = false;
  loginFailed = false;

  courses: any[] = [
    {id: 1, name: "Typescript"},
    {id: 2, name: "Angular"},
    {id: 3, name: "Node JS"},
    {id: 4, name: "React JS"}
  ];

  myChoice: number = 0;

  colorName: string = 'red';
  fontWeight: string = 'bold';
  borderStyle: string = '1px solid black';

  isBordered: boolean = true;
  isColor: boolean = true;

  colorFun2 = { color: "red" };

  login(){
    this.loginFailed = this.loginSuccess = false;
    if(this.userName === "admin" && this.password === "admin@123"){
      this.loginSuccess = true;
    }else{
      this.loginFailed = true;
    }
  }

  nextChoice(){
    this.myChoice++;
  }
}
