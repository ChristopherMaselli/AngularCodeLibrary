import { CoursesService } from './course/courses.service';
import {Component } from '@angular/core';

//ng g c {name} for component
//ng g s {name} for services
//ng g d {name} for directive

@Component({
    selector: 'courses', // <courses>
    //template: '<h2> {{ "Title: " + getTitle() }}</h2>'
    template:  `
        {{ text | summary: 10 }}
    `
    
    /*
    `
    {{ course.title | uppercase | lowercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'AUD':false:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortData'}} <br/>
    `
    */
    
    /*
    `
    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()" />
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `   
    */
    
    /*
    `
        <input #email (keyup.enter)="onKeyUp(email.value)" />
    `
    */
    
    /*
    `
        <input (keyup.enter)="onKeyUp($event)" />
    `
    */
    
    /*
    `
        <input (keyup.enter)="onKeyUp()" />
    `
    */

    /*
    `
        <input (keyup)="onKeyUp($event)" />
    `
    */
    
    /*
    `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>

        <button class="btn btn-primary" [class.active]="isActive"
        [style.backgroundColor]="isActive ? 'blue' : 'white'" >Save0</button>
    `
    */
    
    /*
    `
    <img [src]="imgurl" />
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
    `
    */
    /*
    ` 
    <h2> {{ title }}</h2>
    <img src=" {{ imageUrl }}"/>
    <img [src]="imageUrl" />
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li> 
    </ul>
    `
    */
})
export class CoursesComponent {
    text = `Lorem Ipsum is simply dummy text of the printing and typesetting`

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    email = "me@example.com";

    onKeyUp() {
        console.log(this.email);
    }
    
    onKeyUp3(email) {
        console.log(email);
    }

    onKeyUp2($event) {
        console.log($event.target.value);
    }
    
    onKeyUp1() {
        console.log("ENTER was pressed");
    }

    onKeyUp0($event) {
        if ($event.keyCode === 13) console.log("ENTER was pressed")
    }

    onDivClicked() {
        console.log("Div was clicked");
    }

    onSave($event) {
        $event.stopPropagation();
        console.log("Button was clicked", $event);
    }
    
    isActive = true;

    title = "List of Courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200";

    constructor(service: CoursesService) {
        //let service = new CoursesService();

        this.courses = service.getCourses();
    }

    getTitle() {
        return this.title
    }
}