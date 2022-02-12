import { Injectable } from '@angular/core';
import { IStudent } from './studentlist';
@Injectable({
  providedIn: 'root'
})
export class StudentlistService {

  getStudents() : IStudent[]{
    return [
      { id: 'stu101', name: 'Peter', gender: 'Male', dateOfBirth: '30/04/1990' }, 
      { id: 'stu102', name: 'Rose', gender: 'Female', dateOfBirth: '30/04/1995' },
      { id: 'stu103', name: 'Sylvia', gender: 'Female', dateOfBirth: '30/04/1997' },
      { id: 'stu104', name: 'Evans', gender: 'Male', dateOfBirth: '30/04/2000' }
    ];
  }
  constructor() { }
}
