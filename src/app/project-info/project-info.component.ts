import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {__param} from 'tslib';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  isErrorAppear;
  isDataUpdated;
  project;
  errorMessage;
  successMessage;
  projectId;
  constructor(private projectService: ProjectService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.projectId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.updateData();
  }

  updateData() {
    this.projectService.getProjectById(this.projectId).subscribe(project => {
      this.project = project;
      this.isDataUpdated = true;
      this.isErrorAppear = false;
      console.log(this.project.employees);
    }, error => {
      this.errorMessage = error.error.errorMessage;
      this.isErrorAppear = true;
    });
  }

  delete() {
    if (this.project.employees.length === 0) {
      this.projectService.deleteProject(this.projectId).subscribe(data => {
        this.successMessage = data;
        this.router.navigate(['']);
      }, error => {
        this.errorMessage = error.error.errorMessage;
        this.isErrorAppear = true;
        });
    } else {
      this.errorMessage = 'You can not delete project with involved employee';
      this.isErrorAppear = true;
    }
  }
}
