import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { BadInput } from '../common/bad-input-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

   constructor(private service: PostService){
   }

   ngOnInit(){
    this.service.getPost()
    .subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('An unexpected error ocurred.');
      console.log(error);
    });
   }

  GetData(){
    this.service.getPost()
    .subscribe(response => {
      this.posts = response.json();
    }, 
    error => {
      alert('An unexpected error ocurred.');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    }, 
      (error: AppError) => {
        if(error instanceof BadInput){
          //this.form.setErrors(error.originalError);
        }
        else{
          alert('An unexpected error ocurred.');
          console.log(error);
        }      
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    }, 
    error => {
      alert('An unexpected error ocurred.');
      console.log(error);
    })
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, 
    (error: AppError) => {
      if(error instanceof NotFoundError){
        alert('This post has already been deleted.');        
      }
      else{
        alert('An unexpected error ocurred.');
        console.log(error);
      }
    });
  }
}
