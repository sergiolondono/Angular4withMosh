import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:10 }} <br/>

        {{ course.title | uppercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'1.2-2'}} <br/>
        {{ course.price | currency }} <br/>
        {{ course.releaseDate | date:'longDate' }} <br/>

        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <div (click)="onDivClicked()">
            <button class="btn btn-success" [class.active]="isActive" (click)="onSave($event)">Access</button>
        </div>

        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>

  
        `
})

export class CoursesComponent {
    isActive = true;
    title = "List of courses";
    courses;   
    email = "me@example.com";
    text = `Lorem Ipsum is simply dummy text of the printing and typeset
    `
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2017, 3, 1)
    }
    onKeyUp(){
        console.log(this.email);
    }

    onSave($event){
        $event.stopPropagation();

        console.log('Button was clicked', $event);
    }

    onDivClicked(){
        console.log('Div was clicked');
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}