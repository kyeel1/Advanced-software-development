import { Component, OnInit } from '@angular/core';
import { Database, ClickedUser, changeClickedUser } from '../database/database.module';
import { SetCurrentGroup } from '../group/group.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  ProfileFlag = false;
  GroupFlag = false;
  SearchGroups(S:string){
    this.GroupFlag = false;
    this.ProfileFlag = false;
    for(var i = 0;i<Database.GroupList.length;i++){
      if(Database.GroupList[i].GetName() == S){
        SetCurrentGroup(Database.GroupList[i]);
        this.GroupFlag = true;
      }
    }
  }
  SearchUsers(S:string){
    this.GroupFlag = false;
    this.ProfileFlag = false;
    for(var i = 0;i<Database.UserList.length;i++){
      if(Database.UserList[i].DisplayName == S){
        changeClickedUser(Database.UserList[i]);
        this.ProfileFlag = true;
      }
    }
  }
}
