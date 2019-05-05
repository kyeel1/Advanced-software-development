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
      for (let b = 0; b < CurrentUser.Followers.length; b++)
      {
        if (this.ALLPOSTS[c].Poster == CurrentUser.Followers[b] )
        {
          this.ALLFOLLOWERSPOSTS.push(this.ALLPOSTS[c])
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
    if (upvotesA > upvotesB) { return 1; }
    if (upvotesB > upvotesA) { return -1; }
    return 0;

  }

  ngOnInit() 
  {
    this.findAllFollowers()
    this.sortPosts(this.ALLFOLLOWERSPOSTS)
  }

}
