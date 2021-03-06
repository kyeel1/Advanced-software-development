import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import { Database } from '../database/database.module';
import { Compiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core/src/linker/compiler';
import { GroupsModule } from '../groups/groups.module';
import { SetCurrentGroup } from '../group/group.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.sortPosts(this.Top);
      this.TopPost = this.Top[0];
      this.Group.sort(this.compareG);
      this.TopGroup = this.Group[0];
      SetCurrentGroup(this.TopGroup);

  }
  TopPost:PostsModule;
  TopGroup:GroupsModule;
  TopFollowers:PostsModule;
  AllPosts = Database.PostList;
  Top:PostsModule[] = Database.PostList;
  Group:GroupsModule[] = Database.GroupList;
  
  
  sortPosts(arr_name: PostsModule[])
  {
    arr_name.sort(this.compare)
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
  compareG(a, b)
  {
    var upvotesA = a.getPoints();
    var upvotesB = b.getPoints();

    let comparison = 0;
    if (upvotesA > upvotesB) return -1;
    if (upvotesB > upvotesA) return 1;
    return 0;

  }
}
