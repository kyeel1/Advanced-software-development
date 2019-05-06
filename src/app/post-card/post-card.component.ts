import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';
import {DatabaseModule, Database} from '../database/database.module';
import { post } from 'selenium-webdriver/http';
import { CurrentUser } from '../log-in/log-in.component';
import { CommentModule } from '../comment/comment.module';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostsModule = new PostsModule(CurrentUser,"");
  AllComments:CommentModule[];
  flag = false;
  constructor() { }

  ngOnInit() {
  }
  UpVote(){
    this.post.keepTrack(CurrentUser,"up");
  }
  DownVote(){
    this.post.keepTrack(CurrentUser,"booooooooo");
  }
  ViewComments(){
    this.flag = true;
    this.AllComments= this.post.Comments;
  }

}
