import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { CommentModule } from '../comment/comment.module';
import { CurrentUser } from '../log-in/log-in.component';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
  WhoVoted: UserModule[] = [];

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
  keepTrack(voter : UserModule,upDown : String){//whenever someone votes on a post it will call this method and include who voted and which way they votes
    var flag = true;
    for(let i in this.WhoVoted){
      console.log("Hello")
      if(voter.DisplayName == this.WhoVoted[i].DisplayName)
      console.log("Hello")
        console.log(voter.Description)
        console.log(this.WhoVoted[i].DisplayName)
        flag = false;
    }
    if(flag){
    if(upDown == "up"){
      console
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
  }
}
