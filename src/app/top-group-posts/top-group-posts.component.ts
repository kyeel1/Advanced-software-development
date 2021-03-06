import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import { GroupsModule } from '../groups/groups.module';
import {DatabaseModule, Database} from '../database/database.module';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-top-group-posts',
  templateUrl: './top-group-posts.component.html',
  styleUrls: ['./top-group-posts.component.css']
})
export class TopGroupPostsComponent implements OnInit {

  ALLPOSTS: PostsModule[] = Database.PostList
  ALLGROUPS: GroupsModule[] = Database.GroupList
  //CURRENTUSERGROUPS: GroupsModule[] = new Array;
  ALLGROUPPOSTS: PostsModule[] = new Array;
  

  constructor() { }
 // i < this.GROUPS[c].UserList


 // findAllGroups2(){
 //   for (let c = 0; c < this.ALLGROUPS.length; c++) {
 //     console.log("loop")
 //     console.log(CurrentUser.groups.length)
 //     if(CurrentUser.)
 //   }
 // }


  sortTopGroupPosts() {

    for (let c = 0; c < CurrentUser.groups.length; c++)
    {
      for (let d = 0; d < CurrentUser.groups[c].UserList.length; d++ )
      {
        for(let a = 0; a < this.ALLPOSTS.length; a++)
        {
          if (this.ALLPOSTS[a].Poster == CurrentUser.groups[c].UserList[d])
          {
            this.ALLGROUPPOSTS.push(this.ALLPOSTS[a])
          }
        }
        //for(let a = 0; a < this.CURRENTUSERGROUPS[c].UserList[d].posts.length; a++)
        //this.CURRENTUSERGROUPS[c].UserList[d].posts[a].push()
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
    
    this.sortTopGroupPosts()
    this.sortPosts(this.ALLGROUPPOSTS)
    console.log(this.ALLGROUPPOSTS.length)
    console.log(this.ALLGROUPS.length)
    console.log(CurrentUser.groups)
    console.log(this.ALLPOSTS.length)
  }

}
