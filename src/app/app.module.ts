import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import { CourseComponent } from './course/course.component';
import {CoursesService} from './courses.service';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    PostsComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
