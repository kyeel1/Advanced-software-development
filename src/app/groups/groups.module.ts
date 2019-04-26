import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GroupsModule {
  constructor(name){this.GroupName = name}
  UserList : UserModule[];
  AdminList : UserModule[];
  GroupName : String;
  //WarList : War[];
  AddUser(user: UserModule):void {//adds a person to the group
    this.UserList.push(user);
  }
  AddAdmin(admin: UserModule):void{
    this.AdminList.push(admin);
  }
}
