import {Component} from '@angular/core';
import {CoursesService} from './courses.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  templateUrl: '../courses/courses.component.html'
})
export class CoursesComponent {
  firstName: string = 'Mel Bryan Flores'
  isActive: boolean = true;

  courses: string[];
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  btnClick($event: MouseEvent) {
     $event.stopPropagation();
     console.log('btn clicked');
  }

  divClicked() {
    console.log('div clicked');
  }

  enterPressed() {
    console.log('Enter was pressed');
  }
}
