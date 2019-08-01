import {Employee} from './employee';

export class Project {
  id: number;
  projectName: string;
  createdAt: Date;
  updatedAt: Date;
  employees: Employee[];
}
