import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL = 'http://localhost:8080/employee/';

  constructor(private http: HttpClient) { }

  getAllEmployee() {
    return this.http.get(this.URL);
  }

  getEmployeeById(id: number) {
    return this.http.get(this.URL + id);
  }

  addEmployee(employee: Employee) {
    return this.http.post(this.URL, employee);
  }

  updateEmployee(id: number, employee: Employee) {
    return this.http.put(this.URL + id, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.URL + id);
  }

  addProjectToEmployee(employeeId: number, projectId: number) {
    const finalUrl = this.URL + 'project/' + employeeId + '/' + projectId;
    return this.http.get(finalUrl);
  }
}
