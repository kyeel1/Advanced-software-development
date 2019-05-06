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

  @Input() post: PostsModule;
  flag = false;
  temp:PostsModule;
  
  AllComments:CommentModule[] = this.post.getCommentList();
  constructor() { }

  ngOnInit() {
    for(var i = 0;i<Database.PostList.length;i++){
      if(this.post == Database.PostList[i]){
        this.temp = Database.PostList[i];
      }
    }
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
