import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from './studentlist';
import { StudentlistService } from './studentlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers : [ StudentlistService]
})
export class StudentListComponent implements OnInit {

  @Input() public childname;
//  students: IStudent[];
     
//   constructor(private _studentlistService: StudentlistService) { 
//    this.students = this._studentlistService.getStudents();
//  }
  students = [
    { id: '1', name: 'Peter', gender: 'Male', dateOfBirth: '30/04/1990' }, 
    { id: '2', name: 'Rose', gender: 'Female', dateOfBirth: '30/04/1995' },
    { id: '3', name: 'Sylvia', gender: 'Female', dateOfBirth: '30/04/1997' },
    { id: '4', name: 'Evans', gender: 'Male', dateOfBirth: '30/04/2000' }
  ];

  ngOnInit() {
  }
    constructor(private router: Router) {}

    onSelect(student){
      this.router.navigate(['/students', student.id]);
    }
}
