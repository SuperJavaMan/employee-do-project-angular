import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  isErrorAppear;
  isDataUpdated;
  employee;
  errorMessage;
  employeeId;
  successMessage;
  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.employeeId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(project => {
      this.employee = project;
      this.isDataUpdated = true;
      this.isErrorAppear = false;
      console.log(this.employee.employees);
    }, error => {
      this.errorMessage = error.error.errorMessage;
      this.isErrorAppear = true;
    });
  }

  delete() {
      this.employeeService.deleteEmployee(this.employeeId).subscribe(data => {
        this.successMessage = data;
        this.router.navigate(['/show-employees']);
      }, error => {
        this.errorMessage = error.error.errorMessage;
        this.isErrorAppear = true;
      });
  }

}
