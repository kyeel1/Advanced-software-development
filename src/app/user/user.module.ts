import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../posts/posts.module';
import { GroupsModule } from '../groups/groups.module';
import {MessageModule} from '../message/message.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModule {
    constructor(UN,P,DN){this.UserName = UN,this.Password = P,this.DisplayName = DN}
    UserName: string = "";
    Password: string = "";
    DisplayName: string ="";
    Description: String ="";
    Picture: String ="";//stores the link to the picture
    Followers: UserModule[] = new Array;
    Following: UserModule[]= new Array;
    posts: PostsModule[]= new Array;
    groups: GroupsModule[]= new Array;
    messages: MessageModule[]=new Array;
    AddMessage(message: MessageModule){
      this.messages.push(message);
    }
    AddPosts(post: PostsModule):void {//add posts to a users history
      this.posts.push(post);
     }
     AddGroup(group: GroupsModule):void {//keeps track of all the groups a user is in
      this.groups.push(group);
     }
     AddFollower(follower: UserModule):void {//adds a person to this persons followers list
      this.Followers.push(follower);
     }
     AddFollowing(following: UserModule):void {//follows another person
      this.Following.push(following);
     }
     AddPicture(picture: String):void {//saves a string of the file name of a picture where the file is located
      this.Picture = picture;
     }
     AddDescription(description: String):void {//adds a description in the profile page
      this.Description = description;
     }
     getUserName(){
      return this.UserName;
     }
     getPassword(){
      return this.Password;
     }
 }

 export let TestUser= new UserModule("Hank", "12345", "abcd");
 