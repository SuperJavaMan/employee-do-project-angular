import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowProjectsComponent } from './show-projects/show-projects.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowProjectsComponent,
    ShowUsersComponent,
    ProjectInfoComponent,
    EmployeeInfoComponent
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
