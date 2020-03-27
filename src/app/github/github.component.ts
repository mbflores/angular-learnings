import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  profiles: any;
  constructor(private service: GithubService) {

  }

  ngOnInit() {
    this.service.getResources().subscribe(res => {
      this.profiles = res;
      console.log(res);
    });
  }

}
