import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
import { CurrentUser } from '../log-in/log-in.component';
import { CommentsComponent } from '../comments/comments.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostsModule { 
  constructor(P,C){this.Poster = P;this.Content = C,this.UpVotes = 0,this.DownVotes = 0}
  Poster: UserModule;
  Content:string ="";
  Comments:CommentModule[] = new Array;
  UpVotes:number = 0;
  DownVotes:number = 0;
  TotalVote:number = 0;
  WhoVoted: UserModule[] = new Array;

  UpdateTotal(){
    this.TotalVote = this.UpVotes - this.DownVotes;
    
  }
  AddUpVote():void{
    this.UpVotes += 1;
    this.UpdateTotal();
    this.Poster.AddPoints(1);
  }
  AddDownVote():void{
    this.DownVotes += 1;
    this.UpdateTotal();
    this.Poster.AddPoints(-1);
  }   
  keepTrack(voter:UserModule,upDown : string){
    var flag = true;
    for(let i in this.WhoVoted){
      if(voter.DisplayName == this.WhoVoted[i].DisplayName)
      flag = false;
    }
    if(flag){
    if(upDown == "up"){
      this.AddUpVote();
      this.WhoVoted.push(voter);
    }
    else{
      this.AddDownVote();
      this.WhoVoted.push(voter);
    }
  }
}
  getPoster():UserModule{
    return this.Poster
  }
  getCommentList():CommentModule[]{
    return this.Comments;
  }
  User: UserModule;//temp user replace later with the current logged in user
  addComment(content:string):void{
  let comment = new CommentModule(this.User ,content);
  this.Comments.push(comment);
  }
}
