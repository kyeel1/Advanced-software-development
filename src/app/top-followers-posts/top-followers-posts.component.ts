import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import { GroupsModule } from '../groups/groups.module';
import {DatabaseModule, Database} from '../database/database.module';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-top-followers-posts',
  templateUrl: './top-followers-posts.component.html',
  styleUrls: ['./top-followers-posts.component.css']
})
export class TopFollowersPostsComponent implements OnInit {

  ALLPOSTS: PostsModule[] = Database.PostList;
  ALLFOLLOWERSPOSTS: PostsModule[] = new Array;

  constructor() { }
 // i < this.GROUPS[c].UserList

  findAllFollowers(){
    for (let c = 0; c < this.ALLPOSTS.length; c++) 
    {
      console.log(CurrentUser.Following)
      for (let b = 0; b < CurrentUser.Following.length; b++)
      {
        if (this.ALLPOSTS[c].Poster == CurrentUser.Following[b] )
        {
          this.ALLFOLLOWERSPOSTS.push(this.ALLPOSTS[c])
          console.log(this.ALLFOLLOWERSPOSTS.length)
        }
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
    return 0;

  }

  ngOnInit() 
  {
    this.findAllFollowers()
    console.log(this.ALLFOLLOWERSPOSTS.length)
    this.sortPosts(this.ALLFOLLOWERSPOSTS)
  }

}
