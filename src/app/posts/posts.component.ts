import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostService} from '../services/post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit() {
    console.log('init');
    this.service.getResources()
      .subscribe(res => {
      console.log(res);
      this.posts = res;
    }, error => {
        alert('No Internet');
      });
  }

  createPost(input: HTMLInputElement) {
    console.log('triggered  ');
    let post: Post = {
      title: input.value
    };
    input.value = '';
    this.service.creaResource(post)
      .subscribe(response => {
      console.log(response);
      post.id = response as number;
      this.posts.splice(0, 0, post);
    }, (error: Response) => {
        if (error.status === 400) {
          alert('unexpected error occurred');
          console.log(error);
        }
      });
  }

  Update(post: Post) {
    post.title += 'updated';
    this.service.updateResource(post)
      .subscribe(res => {
      console.log(res);
    });
  }
  Delete(post: Post) {
    this.service.deleteResource(post.id)
      .subscribe( (res) => {
      console.log(res);
      var indexOfPost = this.posts.indexOf(post);
      this.posts.splice(indexOfPost, 1);
    });
  }
}

export class Post {
  id?: number;
  title: string;
}
