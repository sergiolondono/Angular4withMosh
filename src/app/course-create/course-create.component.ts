import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {

categories = [
  {id: 1, name: 'Development'},
  {id: 2, name: 'Art'},
  {id: 3, name: 'Languages'}
];

  constructor() { }

  ngOnInit() {
  }

}
