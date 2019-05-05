import { Component, OnInit, Input } from '@angular/core';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';
import {DatabaseModule} from '../database/database.module';
import { post } from 'selenium-webdriver/http';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() post: PostsModule;

  constructor() { }

  ngOnInit() {
  }
  UpVote(){
    this.post.keepTrack(CurrentUser,"up");
  }
  DownVote(){
    this.post.keepTrack(CurrentUser,"booooooooo");
  }

}
