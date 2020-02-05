import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  template: `
    <h1>Hello Angular, {{firstName}} is here</h1>
    <ul>
      <li *ngFor="let course of courses">{{course}}</li>
    </ul>
  `
})
export class CoursesComponent {
  firstName: string = 'Mel Bryan Flores';

  courses: string[];
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
