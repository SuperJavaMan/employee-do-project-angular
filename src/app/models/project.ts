import {Employee} from './employee';

export class Project {
  id: number;
  projectName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  employees: Employee[];
}
