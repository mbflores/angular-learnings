import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Favorite} from '../app.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('favorite') favorite: Favorite;
  @Output('favoriteChanged') favoriteChanged = new EventEmitter();

  constructor() {
    }

    Liked() {
      if (this.favorite.isSelected) {
      this.favorite.count--;
    } else {
        this.favorite.count++;
    }
      this.favorite.isSelected = !this.favorite.isSelected;
      console.log(this.favorite.count);
      this.favoriteChanged.emit(this.favorite.isSelected);

    }

  ngOnInit() {
  }

}
