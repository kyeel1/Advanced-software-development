import { Component, OnInit } from '@angular/core';
import { Database, addUser } from '../database/database.module';
import { UserModule } from '../user/user.module';
import { log } from 'util';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {
  temp = Database.UserList;
  compare : UserModule;
  constructor() { }
  Message : String;
  ngOnInit() {}
  LogIn(Username,Password): boolean{
    this.SignUp("user4","pass4","user4");
    console.log(Database.UserList);
    for(var i;i <this.temp.length;i++){
        this.compare = this.temp.pop();
        if(this.compare.getUserName == Username && this.compare.getPassword == Password){
            CurrentUser = this.compare;
            return true;
        }
        else{
          console.log(this.compare.getUserName);
        }
    }
    return false;
  }
  LogOut():void{
    CurrentUser = new UserModule("guest","guest","guest");
  }
  Submit(event,UN,PW){
    if (this.LogIn(UN,PW)){
      this.LogIn(UN,PW);
      this.Message = "log in successful";
    }
    else{
      this.Message = "log in failed wrong username and password";
    }
  }
  SignUp(Username,Password,DisplayName){
    addUser(Username,Password,DisplayName);
  }
}
export let CurrentUser=new UserModule("guest","guest","guest");