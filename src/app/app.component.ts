import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }
  }
  
  canSave = true;
  
  courses;

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  loadCourses()
  {
    this.courses = [
      { id: 1, name: 'course1 '},
      { id: 2, name: 'course2 '},
      { id: 3, name: 'course3 '}
  ]
  }
  
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'UPDATED';
  }
  
  courses2 = [
    { id: 1, name: 'course1 '},
    { id: 2, name: 'course2 '},
    { id: 3, name: 'course3 '}
  ]

  viewMode = 'somethingElse'

  courses0 = [1, 2]

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }
  title = 'Angular app';
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite Changed", eventArgs);
  }
}
