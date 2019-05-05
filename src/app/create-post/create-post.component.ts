import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import { CurrentUser } from '../log-in/log-in.component';
import { Database, addPost } from '../database/database.module';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  text;
  constructor() { }
  submit(){
    console.log("Hello")
    addPost(CurrentUser, this.text );
    console.log(Database.PostList[0]);
  }

  ngOnInit() {
  }

}
