import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, Input, OnInit } from '@angular/core';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit{
  posts: any[];

  constructor(private service: PostService) {
    
  }

  //Don't call HTTP services in your constructor, for initialization, call them in OnInit this prevents repeated calls to the server
  ngOnInit() {
   this.service.getAll().subscribe(posts => this.posts = posts as any[]);
  }

  //Don't call HTTP services in automated tests

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post)

    input.value = '';

   this.service.create(post).subscribe(newPost => {
      //post['id'] = newPost.id;
      post['id'] = newPost['id'];
      //this.posts.splice(0, 0, post) Pesimistic
      console.log(newPost);
    },  (error: AppError) => {                           //(error: Response) => {
      this.posts.splice(0, 1);                
      if (error instanceof BadInput)                     //if (error.status === 400)
      {
        //2 this.form.setErrors(error.originalError);
        //this.form.setErrors(error.json())
      }
      else 
      {
        throw error;
      }
      
    })
  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    })
    //this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    //this.service.delete(post.id).subscribe(() => {}                  //this.service.deletePost(345).subscribe(response => {
      this.service.delete(post.id).subscribe(null),  (error: AppError) => {                //(error: Response) => {  
      this.posts.splice(index, 0, post); //<------Being ignored for some reason, look into later
        if (error instanceof NotFoundError)           //if (error.status === 404)
      {
        alert('This post has already been deleted.');
      }
      else {
        throw error;
      }
      
    }
  }
}
