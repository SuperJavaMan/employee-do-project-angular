import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowProjectsComponent} from './show-projects/show-projects.component';
import {ShowEmployeesComponent} from './show-employees/show-employees.component';
import {StartProjectComponent} from './start-project/start-project.component';
import {HireEmployeeComponent} from './hire-employee/hire-employee.component';
import {ProjectInfoComponent} from './project-info/project-info.component';
import {EmployeeInfoComponent} from './employee-info/employee-info.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';
import {UpdateProjectComponent} from './update-project/update-project.component';

const routes: Routes = [
  {path: '', component: ShowProjectsComponent},
  {path: 'show-projects', component: ShowProjectsComponent},
  {path: 'show-employees', component: ShowEmployeesComponent},
  {path: 'start-project', component: StartProjectComponent},
  {path: 'hire-employee', component: HireEmployeeComponent},
  {path: 'project/:id', component: ProjectInfoComponent},
  {path: 'employee/:id', component: EmployeeInfoComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'update-project/:id', component: UpdateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
