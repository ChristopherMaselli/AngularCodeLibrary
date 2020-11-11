import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {
  constructor(http: HttpClient) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}

// export class PostService {
//   private url = 'https://jsonplaceholder.typicode.com/posts';

//   constructor(private http: HttpClient) { }

//   getPosts() {
//     return this.http.get(this.url).pipe(catchError(this.handleError));
//   }

//   // getPosts() {
//   //   return this.http.get(this.url);
//   // }

//   createPost(post) {
//     return this.http.post(this.url, JSON.stringify(post)).pipe(catchError(this.handleError));
//   }

//   // createPost(post) {
//   //   return  this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error: Response) => {
//   //     if (error.status === 400) {
//   //       return Observable.throw(new BadInput(error));
//   //     }
//   //     return Observable.throw(new AppError(error));
//   //   }));
//   // }

//   updatePost(post) {
//     return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).pipe(catchError(this.handleError));
//   }

//   deletePost(id) {
//     return this.http.delete(this.url + '/' + id).pipe(catchError(this.handleError));
//   }

//   // deletePost(id) {
//   //   return this.http.delete(this.url + '/' + id).pipe(catchError((error: Response) => {
//   //     if (error.status === 404)
//   //     {
//   //       return Observable.throw(new NotFoundError())

//   //     }
//   //     return Observable.throw(new AppError(error));
      
//   //   }))
//   // }

//   private handleError(error: Response) {
//     if (error.status === 400) 
//     {
//       return Observable.throw(new BadInput(error));
//     }
//     if (error.status === 404)
//     {
//       return Observable.throw(new NotFoundError())
//     }
//     return Observable.throw(new AppError(error));
//   }

// }