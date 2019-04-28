import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsModule } from '../groups/groups.module';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class DatabaseModule {
  constructor(GArray,UArray,PArray){this.groupList = GArray,this.UserList = UArray,this.postList = PArray}
  groupList: GroupsModule[];//holds all groups
  UserList: UserModule[];  //holds all users
  postList: PostsModule[]; //holds all posts

  createGroup(creator: UserModule, name: String){//when you call this method it creates a group with the name specified and adds the creator to the group as a user and an admin and updates the users profile to include they are part of that group
    let temp = new GroupsModule(name);
    temp.AddAdmin(creator);
    temp.AddUser(creator);
    this.groupList.push(temp);
    creator.AddGroup(temp);
   }
   addUser(UserName: string,Password : String, DisplayName : String){//use this to create new users through the log in page
    let temp = new UserModule(UserName,Password,DisplayName);
    this.UserList.push(temp);
   }
   addPost(Poster: UserModule,Description : String){//use this to create new posts this also adds the post to the users list of posts
    let temp = new PostsModule(Poster,Description);
    this.postList.push(temp);
    Poster.AddPosts(temp);
   }
 }
 //this next section is just a default database that you can take users, groups and posts from use the above addgroup addpost and add user to commands to add a user to the "database"
 let group1 = new GroupsModule("group1");
 let group2 = new GroupsModule("group2");
 let group3 = new GroupsModule("group3");
 let user1 = new UserModule("user1","pass1","user1");
 let user2 = new UserModule("user2","pass2","user2");
 let user3 = new UserModule("user3","pass3","user3");
 let post1 = new PostsModule(user1,"hello world");
 let post2 = new PostsModule(user1,"another one");
 let post3 = new PostsModule(user2,"this is a second world");
 let post4 = new PostsModule(user3,"this is a third world");
 let TGL = {group1,group2,group3};
 let TUL = {user1,user2,user3};
 let TPL = {post1,post2,post3,post4};
 export let Database = new DatabaseModule(TGL,TUL,TPL);//the database that contains all the arrays
