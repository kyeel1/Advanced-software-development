import { Component, OnInit, Input } from '@angular/core';
import { CommentModule } from '../comment/comment.module';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() Comment: CommentModule;
  constructor() { }
  
  ngOnInit() {
  }
  UpVote(){
    this.Comment.keepTrack(CurrentUser,"up");
  }
  DownVote(){
    this.Comment.keepTrack(CurrentUser,"booooooooo");
  }
}
