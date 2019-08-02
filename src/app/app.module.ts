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

@NgModule({
  declarations: [
    AppComponent,
    ShowProjectsComponent,
    ShowEmployeesComponent,
    ProjectInfoComponent,
    EmployeeInfoComponent,
    HeadComponent,
    StartProjectComponent,
    HireEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
