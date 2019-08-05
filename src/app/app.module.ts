import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import {HttpClientModule} from '@angular/common/http';
import { HeadComponent } from './head/head.component';
import { StartProjectComponent } from './start-project/start-project.component';
import { HireEmployeeComponent } from './hire-employee/hire-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShowProjectsComponent,
    ShowEmployeesComponent,
    ProjectInfoComponent,
    EmployeeInfoComponent,
    HeadComponent,
    StartProjectComponent,
    HireEmployeeComponent,
    UpdateEmployeeComponent,
    UpdateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
