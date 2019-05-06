import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsModule } from '../groups/groups.module';
import { UserModule } from '../user/user.module';
import { PostsModule } from '../posts/posts.module';
import { CommentModule } from '../comment/comment.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class DatabaseModule{
  constructor(){//GArray,UArray,PArray
    /* for(var i = 0;i<GArray.length;i++){this.GroupList.push(GArray[i])};
    for(var i = 0;i<UArray.length;i++){this.UserList.push(UArray[i])}; 
    for(var i = 0;i<PArray.length;i++){this.PostList.push(PArray[i])}; */
  }
  GroupList: GroupsModule[]=new Array;//holds all groups
  UserList: UserModule[]= new Array;  //holds all users
  PostList: PostsModule[]= new Array; //holds all posts

  
 }
 //this next section is just a default database that you can take users, groups and posts from use the above addgroup addpost and add user to commands to add a user to the "database"
 export let Database = new DatabaseModule();//the database that contains all the arrays
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
 /* let TGL:Array<GroupsModule>;
 let TUL:Array<UserModule> = UserModule[3];
 let TPL:Array<PostsModule> = PostsModule[4]; */
 Database.GroupList.push(group1);
 Database.GroupList.push(group2);
 Database.GroupList.push(group3);
 Database.UserList.push(user1);
 Database.UserList.push(user2);
 Database.UserList.push(user3);
 Database.PostList.push(post1);
 Database.PostList.push(post2);
 Database.PostList.push(post3);
 Database.PostList.push(post4);
export function createGroup(creator: UserModule, name: string){//when you call this method it creates a group with the name specified and adds the creator to the group as a user and an admin and updates the users profile to include they are part of that group
  let temp = new GroupsModule(name);
  temp.AddAdmin(creator);
  temp.AddUser(creator);
  Database.GroupList.push(temp);
  creator.AddGroup(temp);
 }
 export function AddToGroup(User : UserModule,group: GroupsModule){
  group.AddUser(User);
  User.AddGroup(group);
 }
 export function AddFollower(Follower:UserModule,Following: UserModule){//current user first and then the clicked user
   Following.AddFollower(Follower);
   Follower.AddFollowing(Following);
 }
 export function addUser(UserName: string,Password : string, DisplayName : string):boolean{//use this to create new users through the log in page
  let newUser = new UserModule(UserName,Password,DisplayName);
  Database.UserList.push(newUser);
  return true;
 }
 export function addPost(Poster: UserModule,Description : String){//use this to create new posts this also adds the post to the users list of posts
  let temp = new PostsModule(Poster,Description);
  Database.PostList.push(temp);
  Poster.AddPosts(temp);
 }
 user1.AddFollower(user2); 
 export let ClickedUser:UserModule;
 export function changeClickedUser(user: UserModule){
   ClickedUser=user;
 } 
 user1.AddFollower(user2);
 post1.AddUpVote();
 post2.AddUpVote();
 post2.AddUpVote();
 Database.GroupList[0].AddRule("1");
 Database.GroupList[0].AddRule("2");
 Database.GroupList[0].AddRule("3");
 group1.AddUser(user1);
 post1.addComment("does this work");
 post2.addComment("does this work");
 post3.addComment("does this work");
 post4.addComment("does this work");