import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project';
import {ProjectService} from '../services/project.service';
import {Router} from '@angular/router';

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
  projectId;
  constructor(private projectService: ProjectService,
              private router: Router) {
    this.projectId = this.router.navigate('id');
  }

  ngOnInit() {
    this.projectService.getProjectById(this.projectId).subscribe();
  }

}
