import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[] =[
  {
  id: 1,
name : 'MArk' ,
gender:'Male',
contactPreference: 'Email',
email:'mark@pragimtech.com',
dateOfBirth: new Date('10/25/1988'),
department: 'IT',
isActive: true,
photoPath: 'assets/images/MArk.png'
  },
  {
    id: 2,
  name : 'Mary' ,
  gender:'Female',
  contactPreference: 'Phone',
  phoneNumber: 9866296285,
  dateOfBirth: new Date('07/30/1992'),
  department: 'BA',
  isActive: true,
  photoPath: 'assets/images/Mary.png'
    },
    {
      id: 3,
    name : 'John' ,
    gender:'Male',
    contactPreference: 'Phone',
    phoneNumber: 9087654321,
    dateOfBirth: new Date('10/25/1992'),
    department: 'IT',
    isActive: false,
    photoPath: 'assets/images/John.png'
      },
]
  constructor() { }

  ngOnInit() {
  }

}
