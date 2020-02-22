import {Component, OnInit} from '@angular/core';
import {last} from "rxjs/operators";
import  *  as  data  from  './courses.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  ngOnInit(): void {

  }
  favorite: Favorite = {
    isSelected: false,
    count: 10,
    title: 'The complete angular'
  };


  courses: Course[];
  viewMode: string;

  trackCourse(index, course: Course) {
    return course ? course.id : undefined;
  }

  loadCourses() {
    this.courses = [
      {
        id: 1,
        name: 'Angula1'
      },
      {
        id: 2,
        name: 'Angular2'
      },
      {
        id: 3,
        name: 'Angular3'
      },
      {
        id: 4,
        name: 'Angular4'
      }
    ];
  }

  onAdd() {
    let lastId: number = this.courses.length - 1;
    let lastCourse = lastId < 0 ? {
      id: 0
    } : this.courses[lastId];

    let course: Course = {
      id: (lastCourse.id + 1),
      name: `Angular${lastCourse.id + 1}`
    };
    this.courses.push(course);
  }

  onDelete(course) {
    let indexCourseInDb = this.courses.indexOf(course);
    this.courses.splice(indexCourseInDb,1);
  }
  onFavoriteChanged(event) {
    console.log('favorite Changed' + event);
  }
}
export interface Course {
  id: number;
  name: string;
}
export  interface  Favorite {
  isSelected: boolean;
  count: number;
  title: string;
}
