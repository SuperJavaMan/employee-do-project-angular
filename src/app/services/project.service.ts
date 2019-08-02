import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  URL = 'http://localhost:8080/project/';

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get(this.URL);
  }

  getProjectById(id: number) {
    return this.http.get(this.URL + id);
  }

  addProject(employee: Employee) {
    return this.http.post(this.URL, employee);
  }

  updateProject(id: number, employee: Employee) {
    return this.http.put(this.URL + id, employee);
  }

  deleteProject(id: number) {
    return this.http.delete(this.URL + id);
  }

  addEmployeeToProject(employeeId: number, projectId: number) {
    const finalUrl = this.URL + 'employee/'  + projectId + '/' + employeeId;
    return this.http.get(finalUrl);
  }
}


