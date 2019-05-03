import { Component, OnInit } from '@angular/core';
import { GroupsModule } from '../groups/groups.module';
import { UserModule } from '../user/user.module';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
export function SetCurrentGroup(g: GroupsModule):void{
CurrentGroup = g;
}
let CurrentGroup :GroupsModule;
