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
Poster:String;
Content:String;
UpVotes:number;
DownVotes:number;
TotalVote:number;
WhoVoted: UserModule[];
}
function UpdateTotal(){
this.TotalVote = this.UpVotes - this.DownVotes;
}
function AddUpVote():void{
this.UpVotes += 1;
UpdateTotal();
}
function AddDownVote():void{
this.DownVotes += 1;
UpdateTotal();
}  
