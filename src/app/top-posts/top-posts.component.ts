import { Component, OnInit } from '@angular/core';
import { PostsModule } from '../posts/posts.module';
import {DatabaseModule, Database} from '../database/database.module';
import { getTNode } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-top-posts',
  templateUrl: './top-posts.component.html',
  styleUrls: ['./top-posts.component.css']
})
export class TopPostsComponent implements OnInit {

  TOPPOSTS: PostsModule[] = Database.postList;

  constructor() { }

  sortTopPosts(arr_name: PostsModule[])
  {
    arr_name.sort(this.compare);
    //for (var i = 0; i < arr_name.length; i++)
   // {
     // array_name[i]
    //
  }

  compare(a, b)
  {
    var upvotesA = a.TotalVote;
    var upvotesB = b.TotalVote;

    let comparison = 0;
    if (upvotesA > upvotesB) return 1;
    if (upvotesB > upvotesA) return -1;
    return 0;

  }

  ngOnInit() {
    this.sortTopPosts(this.TOPPOSTS);

  }

}
