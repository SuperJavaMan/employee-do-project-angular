import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../models/employee';
import {Project} from '../models/project';

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
    console.log(this.URL + id);
    return this.http.get(this.URL + id);
  }

  addProject(project: Project) {
    return this.http.post(this.URL, project);
  }

  updateProject(id: number, project: Project) {
    return this.http.put(this.URL + id, project);
  }

  deleteProject(id: number) {
    return this.http.delete(this.URL + id);
  }

  addEmployeeToProject(employeeId: number, projectId: number) {
    const finalUrl = this.URL + 'employee/'  + projectId + '/' + employeeId;
    return this.http.get(finalUrl);
  }
}


