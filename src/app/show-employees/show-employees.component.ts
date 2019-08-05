import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
  isErrorAppear;
  isDataUpdated;
  employees: Employee[] = [];
  errorMessage;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.employeeService.getAllEmployee()
      .subscribe((employees: Employee[]) => {
        this.employees = employees;
        this.isDataUpdated = true;
        this.isErrorAppear = false;
      }, error => {
        this.errorMessage = error.error.errorMessage;
        this.isErrorAppear = true;
      });
  }
}
