import { Component, OnInit, Input } from '@angular/core';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';
import {DatabaseModule} from '../database/database.module';

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

}
