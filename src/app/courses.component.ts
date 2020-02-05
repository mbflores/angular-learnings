import {Component} from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'courses',
  template: '<h1>Hello Angular, {{firstName}} is here</h1>'
})
export class CoursesComponent {
  firstName: string = 'Mel Bryan Flores';
}
