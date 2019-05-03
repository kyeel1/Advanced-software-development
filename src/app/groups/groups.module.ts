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
  GroupName : string;
  Picture : string;
  Description: string;
  RuleList: string;
  //WarList : War[];
  AddUser(user: UserModule):void {//adds a person to the group
    this.UserList.push(user);
  }
  AddAdmin(admin: UserModule):void{
    this.AdminList.push(admin);
  }
  AddPicture(P: string):void{
    this.Picture = P;
  }
  AddDescription(D: string):void{
    this.Description = D;
  }
  AddRuleList(R: string):void{
    this.RuleList = R;
  }
  GetRuleList():string{
    return this.RuleList;
  }
  GetDescription():string{
    return this.Description;
  }
  GetPicture():string{
    return this.Picture;
  }
  GetName():string{
    return this.GroupName;
  }
  GetUserList():UserModule[]{
    return this.UserList;

  }
  GetAdminLIst():UserModule[]{
    return this.AdminList;
  }
}
