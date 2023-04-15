import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
    employees = [
    {
      "empId": 100,
      "empName": "Emp1",
      "age": 60,
      "gender": "M",
      "hobbies": [
        "cricket",
        "football"
      ],
      "address": "Mysore"
    },
    {
      "empId": 101,
      "empName": "Emp2",
      "age": 25,
      "gender": "F",
      "hobbies": [
        "chess",
        "reading"
      ],
      "address": "Bangalore"
    },
    {
      "empId": 102,
      "empName": "Emp3",
      "age": 45,
      "gender": "M",
      "hobbies": [
        "cricket",
        "reading"
      ],
      "address": "Chennai"
    }
  ];  

  idSelected!:number;
  message!:string;
  employeeSelected!:Employee;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(employee){
    if(employee !== undefined){
      this.idSelected = employee.empId;
      this.message = `The employee selected is ${this.idSelected}`;
      this.employeeSelected = new Employee(employee.empId, employee.empName, employee.age);
      console.log(this.employeeSelected);
    }
  }
}
