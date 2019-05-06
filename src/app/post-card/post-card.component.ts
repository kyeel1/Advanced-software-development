import { Component, OnInit, Input } from '@angular/core';
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
  flag = false;
  
  AllComments:CommentModule[] = this.post.Comments;
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
  }

}
