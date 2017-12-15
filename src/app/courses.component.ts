import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
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