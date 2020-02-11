import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  count: number;
  constructor() {
    this.isFavorite = false;
    this.count = 10;
    }

    Liked() {
      if (this.isFavorite) {
      this.count--;
    } else {
      this.count++;
    }
      this.isFavorite = !this.isFavorite;
      console.log(this.count);
  }

  ngOnInit() {
  }

}
