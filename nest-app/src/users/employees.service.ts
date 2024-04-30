import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

// TODO: mockなのでDB用意後、削除
const MockEmployees: Employee[] = [
  {
    employeeNumber: '0501',
    name: 'ASL麻衣',
    age: 24,
    imageUrl: '',
  },
  {
    employeeNumber: '0502',
    name: 'ASL和人',
    age: 30,
    imageUrl: '',
  },
  {
    employeeNumber: '0503',
    name: 'ASL広伸',
    age: 30,
    imageUrl: '',
  },
];

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];
  findAll(): Employee[] {
    // TODO: DB実装まではmock
    return MockEmployees;
    // return this.employees;
  }

  findById(employeeNumber: string): Employee {
    const res = this.employees.find(
      (emplyoee) => emplyoee.employeeNumber === employeeNumber,
    );
    return res;
  }

  create(employee: Employee): Employee {
    this.employees.push(employee);
    return employee;
  }
}
