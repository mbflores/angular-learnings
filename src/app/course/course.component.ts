import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  email: string;
  pressedEnter(){
    console.log(this.email);
  }
  btnClick($event: MouseEvent) {
    console.log('btn clicked');
  }
  divClicked() {
    console.log('div clicked');
  }
  constructor() { }

  ngOnInit() {
  }

}
