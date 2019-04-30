import { Component, OnInit } from '@angular/core';
import { Database } from '../database/database.module';
import { UserModule, TestUser } from '../user/user.module';
import { MessageModule } from '../message/message.module';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
receiver:String;
text:String;
name=TestUser.UserName;
message;
userList=Database.UserList;
  constructor() {

  }

  sendMessage(){

    this.message=new MessageModule(this.receiver,name,this.text);
    console.log(this.message.message);
    

    for(var i = 0;i<this.userList.length;i++){
      if(this.userList[i].UserName===this.receiver)
      {
        console.log("Good")
      }
    }

  }
  ngOnInit() {
    
    
  }

}
