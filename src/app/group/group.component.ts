import { Component, OnInit } from '@angular/core';
import { GroupsModule } from '../groups/groups.module';
import { UserModule } from '../user/user.module';
import { Database, AddToGroup } from '../database/database.module';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  constructor() {}
  GroupList = CurrentGroup.UserList;
  CurrentRule = CurrentGroup.GetRuleList();
  ngOnInit() {
  }
  JoinGroup(){
    AddToGroup(CurrentUser,CurrentGroup);
  }
}
export function SetCurrentGroup(g: GroupsModule):void{
CurrentGroup = g;
}
let CurrentGroup :GroupsModule = Database.GroupList[0];
