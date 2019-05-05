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
  compare : UserModule;
  constructor() { }
  Message : String;
  ngOnInit() {}
  LogIn(Username : string,Password:string): boolean{
    for(let i in Database.UserList){
        this.compare = Database.UserList[i];
        if(Username == this.compare.getUserName() && Password == this.compare.getPassword()){
            CurrentUser = this.compare;
            console.log(CurrentUser);
            return true;
        }
        
    }
    return false;
  }
  
  Submit(event,UN,PW){
    if (this.LogIn(UN,PW)){
      this.Message = "log in successful";
    }
    else{
      this.Message = "log in failed wrong username and password";
    }
  }
  SignUp(UserName,PassWord,ConfirmPassword,DisplayName){
    if(PassWord == ConfirmPassword){
    addUser(UserName,PassWord,DisplayName);
    this.LogIn(UserName,PassWord)
    this.Message = " succesfully created account"
    }
    else{
      this.Message = " please make sure your passwords match"
    }
  }
  
}
export let CurrentUser=new UserModule("guest","guest","guest");
export function LogOut():void{
  CurrentUser = new UserModule("guest","guest","guest");
}





