import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommentModule { constructor(P,C){this.Poster = P,this.Content = C,this.UpVotes = 0, this.DownVotes = 0, this.TotalVote = 0}
Poster:UserModule;
Content:String;
UpVotes:number;
DownVotes:number;
TotalVote:number;
WhoVoted: UserModule[] = new Array;

UpdateTotal(){
  this.TotalVote = this.UpVotes - this.DownVotes;
  this.Poster.AddPoints(this.TotalVote);
  }
  AddUpVote():void{
  this.UpVotes += 1;
  this.UpdateTotal();
  }
  AddDownVote():void{
  this.DownVotes += 1;
  this.UpdateTotal();
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
}
