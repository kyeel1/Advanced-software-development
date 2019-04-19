import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../posts/posts.module';
import { GroupsModule } from '../groups/groups.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
    constructor(UN,P,DN){this.UserName = UN,this.Password = P,this.DisplayName = DN}
    UserName: string;
    Password: string;
    DisplayName: string;
    Description: String;
    Picture: String;//stores the link to the picture
    Followers: UserModule[];
    Following: UserModule[];
    posts: PostsModule[];
    groups: GroupsModule[];
    //messages: messages[];
    //AddMessage(){};
    //AddPicture(){};
    //AddFollowers(){};
    //AddFollowing(){};
 }
 function AddPosts(post: PostsModule):void {
  this.posts.push(post);
 }
 function AddGroup(group: GroupsModule):void {
  this.groups.push(group);
 }