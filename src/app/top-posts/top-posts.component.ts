import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import {DatabaseModule, Database} from '../database/database.module';
import { getTNode } from '@angular/core/src/render3/util';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {
  user1 = new UserModule("user1","pass1","user1");
  post1 = new PostsModule(this.user1,"hello world");
  ALLPOSTS: PostsModule[] = Database.PostList;
  TOPPOSTS: PostsModule[] = new Array;
  


  constructor() { }

  sortTopPosts(arr_name: PostsModule[])
  {
    arr_name.sort(this.compare)
    //console.log("arra length" + arr_name.length)
    //for(var i = 0; i< arr_name.length; i++)
    //{
     // console.log("vote count" + arr_name[i].getTotalVote());
    //}


    arr_name.sort(this.compare);
  }

  compare(a, b)
  {
    var upvotesA = a.TotalVote;
    var upvotesB = b.TotalVote;

    let comparison = 0;
    if (upvotesA > upvotesB) return -1;
    if (upvotesB > upvotesA) return 1;
    return 0;

  }
  
  ngOnInit() {
    this.sortTopPosts(this.ALLPOSTS)
    //console.log(this.ALLPOSTS.length)
    //for(var i = 0; i < this.ALLPOSTS.length; i++)
    //{
      //console.log("loop")
      //console.log(this.ALLPOSTS[i].getTotalVote())
    //}

    
    //this.sortTopPosts(this.ALLPOSTS)
    //this.TOPPOSTS = this.ALLPOSTS;
    //console.log(this.TOPPOSTS[3].getTotalVote())


    //this.ALLPOSTS.sort(this.compare)

    //for (var i = 0; i < this.ALLPOSTS.length - 1; i++)
    //{
      
     // var p = this.ALLPOSTS[i]
     // console.log(p.getTotalVote())
      //var next = this.ALLPOSTS[i+1]
      //if(p.getTotalVote() > next.getTotalVote()){
      //  console.log("test")
      //  this.ALLPOSTS[i] = next;
      //  this.ALLPOSTS[i+1] = p;
     /// }
    //}
    //this.ALLPOSTS.sort(function(a, b){
     // return a.getTotalVote() - b.getTotalVote()
    //})
    //this.sortTopPosts(this.ALLPOSTS);
    //document.writeln(this.ALLPOSTS[3].getTotalVote().toString());
    //document.writeln("test")
  }


}
