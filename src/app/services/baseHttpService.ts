import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Post} from '../posts/posts.component';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class BaseHttpService {
    constructor(private url: string, private http: HttpClient) {
    }

    getResources() {
        return this.http.get(this.url);
    }

    creaResource(resource) {
        return this.http.post(this.url, resource);
    }

    updateResource(resource) {
        return this.http.put(this.url, resource);
    }

    deleteResource(id) {
        return this.http.delete(`${this.url}/${id}`)
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    console.log(error);
                    return throwError(error.message);
                }));
    }

}
