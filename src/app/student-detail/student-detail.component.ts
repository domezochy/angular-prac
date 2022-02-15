import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  template: `
    <h3> You have selected student with id = {{ studentId }}</h3>
  `,
  styles: []
})
export class StudentDetailComponent implements OnInit {

  public studentId;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    let id1 = parseInt(this.route.snapshot.paramMap.get('id'));
    this.studentId = id1;
  }

}
