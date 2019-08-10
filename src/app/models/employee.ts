import {Project} from './project';

export class Employee {

  id: number;
  constructor(id: number,
              firstName: string,
              secondName: string,
              email: string,
              position: string,
              phone: string,
              projects: Project[]) {
  }
}
