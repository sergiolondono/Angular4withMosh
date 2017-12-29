import { Component } from '@angular/core';

@Component({
  selector: 'course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent {

categories = [
  {id: 1, name: 'Development'},
  {id: 2, name: 'Art'},
  {id: 3, name: 'Languages'}
];

submit(course){
  console.log(course);
}

}
