import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.model';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  findAll(): Employee[] {
    return this.employeesService.findAll();
  }

  @Get(':employeeNumber')
  findById(@Param('employeeNumber') employeeNumber: string): Employee {
    return this.employeesService.findById(employeeNumber);
  }

  @Post()
  create(
    @Body('employeeNumber') employeeNumber: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('imageUrl') imageUrl: string,
  ): Employee {
    const employee: Employee = {
      employeeNumber,
      name,
      age,
      imageUrl,
    };
    return this.employeesService.create(employee);
  }
}
