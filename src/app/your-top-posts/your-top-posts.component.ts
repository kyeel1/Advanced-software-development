import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import { GroupsModule } from '../groups/groups.module';
import {DatabaseModule, Database} from '../database/database.module';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-your-top-posts',
  templateUrl: './your-top-posts.component.html',
  styleUrls: ['./your-top-posts.component.css']
})
export class YourTopPostsComponent implements OnInit {
  ALLPOSTS: PostsModule[] = Database.PostList
  YOURSORTEDPOSTS: PostsModule[] = new Array;

  constructor() { }
 // i < this.GROUPS[c].UserList

  findAllYourPosts(){
    for (let c = 0; c < this.ALLPOSTS.length; c++) 
    {
      console.log(CurrentUser.posts.length)
      console.log(CurrentUser.UserName)

        if (this.ALLPOSTS[c].Poster == CurrentUser )
        {
          this.YOURSORTEDPOSTS.push(this.ALLPOSTS[c])
          console.log("pushed")
          //console.log(this.YOURSORTEDPOSTS.length)
        }
    }
  }

  findAllYourPostsTest()
  {
    for (let c = 0; c < this.ALLPOSTS.length; c++) 
    {
    if (this.ALLPOSTS[c].Poster != CurrentUser )
        {
          this.ALLPOSTS.splice(c,1)
          //console.log(this.YOURSORTEDPOSTS.length)
        }
    }
  }

  sortPosts(arr_name: PostsModule[])
  {
    arr_name.sort(this.compare);
    
  }

  compare(a, b)
  {
    let upvotesA = a.TotalVote;
    let upvotesB = b.TotalVote;

    const comparison = 0;
    if (upvotesA > upvotesB) { return -1; }
    if (upvotesB > upvotesA) { return 1; }
    return 0;

  }

  ngOnInit() 
  {
    this.findAllYourPosts()
    this.sortPosts(this.YOURSORTEDPOSTS)
    console.log(this.YOURSORTEDPOSTS.length)
  }

}
