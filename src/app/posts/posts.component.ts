import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

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
    });
   }

  GetData(){
    this.service.getPost()
    .subscribe(response => {
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement){
    let post = { title: input.value };
    input.value = '';

    this.service.createPost(post)
    .subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post){
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response.json());
    })
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
