import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
import { CurrentUser } from '../log-in/log-in.component';
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
  Comments:CommentModule[];
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
  keepTrack(voter : UserModule,upDown : String):boolean{//whenever someone votes on a post it will call this method and include who voted and which way they votes
    for(var i;i = this.WhoVoted.length;i++){
      if(voter == this.WhoVoted[i])
        return false;
    }
    if(upDown == "up"){
      this.AddUpVote();
      this.WhoVoted.push(voter);
      return true;
    }
    else{
      this.AddDownVote();
      this.WhoVoted.push(voter);
      return true;
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
  }
}
