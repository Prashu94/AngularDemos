import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  @Input()
  employeeToEdit:Employee;
 
  employeeId!:number;
  employeeName!:string;
  employeeAge!:number;
  message!:string;
  
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.employeeToEdit);
    this.employeeId = this.employeeToEdit.empId;
    this.employeeName = this.employeeToEdit.empName;
    this.employeeAge = this.employeeToEdit.age;
  }

  updateData(){
    this.employeeToEdit.empId = this.employeeId;
    this.employeeToEdit.empName = this.employeeName;
    this.employeeToEdit.age = this.employeeAge;
    this.message = JSON.stringify(this.employeeToEdit);
  }
}
