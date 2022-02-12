import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from './studentlist';
import { StudentlistService } from './studentlist.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
  providers : [ StudentlistService]
})
export class StudentListComponent implements OnInit {

  @Input() public childname;
  students: IStudent[];
     
  constructor(private _studentlistService: StudentlistService) { 
    this.students = this._studentlistService.getStudents();
  }

  ngOnInit() {
  }

}
