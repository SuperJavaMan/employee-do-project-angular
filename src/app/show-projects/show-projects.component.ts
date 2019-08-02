import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../services/project.service';
import {Project} from '../models/project';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.css']
})
export class ShowProjectsComponent implements OnInit {

  isErrorAppear;
  isDataUpdated;
  projects: Project[] = [];
  errorMessage;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.projectService.getAllProjects()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        this.isDataUpdated = true;
        this.isErrorAppear = false;
      }, error => {
        this.errorMessage = error.error.errorMessage;
        this.isErrorAppear = true;
      });
  }

}
