import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PostsModule { 
  constructor(P,C){this.Poster = P;this.Content = C,this.UpVotes = 0,this.DownVotes = 0}
  Poster: UserModule;
  Content:string;
  Comments:CommentModule[];
  UpVotes:number;
  DownVotes:number;
  TotalVote:number;
  WhoVoted: UserModule[];

  UpdateTotal(){
    this.TotalVote = this.UpVotes - this.DownVotes;
  }
  AddUpVote():void{
    this.UpVotes += 1;
    this.UpdateTotal();
  }
  AddDownVote():void{
    this.DownVotes += 1;
    this.UpdateTotal();
  }   
  keepTrack(voter : UserModule,upDown : String){//whenever someone votes on a post it will call this method and include who voted and which way they votes
    this.WhoVoted.push(voter);
    if(upDown == "up"){
      this.AddUpVote();
    }
    else{
      this.AddDownVote();
    }
  }
  User: UserModule;//temp user replace later with the current logged in user
  addComment(content:string):void{
  let comment = new CommentModule(this.User ,content);
  }
}
