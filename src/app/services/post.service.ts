import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseHttpService} from './baseHttpService';


@Injectable({
  providedIn: 'root'
})
export class PostService extends BaseHttpService {
  // url: string = '';
  constructor(http: HttpClient) {

    super('https://localhost:5001/api/todos', http);
  }


}
