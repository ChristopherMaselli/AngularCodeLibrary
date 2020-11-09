import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit{
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    
  }

  //Don't call HTTP services in your constructor, for initialization, call them in OnInit this prevents repeated calls to the server
  ngOnInit() {
    this.http.get(this.url).subscribe(response => {
      this.posts = response as any[];
    })
  }

  //Don't call HTTP services in automated tests

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.http.post(this.url, JSON.stringify(post)).subscribe(response => {
      post['id'] = response['id'];
      this.posts.splice(0, 0, post)
      console.log(response);
    })
  }

  updatePost(post) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true })).subscribe(response => {
      console.log(response);
    })
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.http.delete(this.url + '/' + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }


}