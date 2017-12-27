import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';

  // task = {    
  //   assignee: {
  //     name: 'John Smith'
  //   }
  // }

  //  canSave = false;
  //  onChangedStyle(){
  //    this.canSave = !this.canSave;
  //  }

  // post= {
  //   title: "Title",
  //   isFavorite: true,
  //   isActive: true,
  //   likesCount: 0
  // } 

  // tweet = {
  //   body: '...',
  //   likesCount: 10,
  //   isLiked: true
  // }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
  //   console.log('Favorite changed: ', eventArgs);
  // }

  // courses = [1, 2];

  // viewMode = 'somethingElse';

  // courses = [
  //   { id: 1, name: 'course1'},
  //   { id: 2, name: 'course2'},
  //   { id: 3, name: 'course3'},
  //   { id: 4, name: 'course4'}
  // ];

  // onAdd(){
  //   this.courses.push({ id: this.courses.length + 1, name: 'course' + (this.courses.length + 1) });
  // }

  // // onRemove(course){
  // //   let index = this.courses.indexOf(course);
  // //   this.courses.splice(index, 1);
  // // }

  // onChange(course){
  //   course.name = 'UPDATED';
  // }
  courses;

  loadCourses(){
    this.courses = [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'},
      { id: 4, name: 'course4'}
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}
