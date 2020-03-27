import { Injectable } from '@angular/core';
import {BaseHttpService} from './baseHttpService';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends BaseHttpService {
  constructor(http: HttpClient) {
    super('https://api.github.com/users/mbflores/followers' , http);
  }
}
