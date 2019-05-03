import { Component, OnInit } from '@angular/core';
import { Database } from '../database/database.module';
import { UserModule, TestUser } from '../user/user.module';
import { MessageModule } from '../message/message.module';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CurrentUser } from '../log-in/log-in.component';


@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
receiver:String;
text:String;
name=CurrentUser.UserName;
messageList=CurrentUser.messages;
message;


  constructor() {

  }

  sendMessage(){

    this.message=new MessageModule(this.receiver, this.name,this.text);
    
    for(let i in Database.UserList){
      if(Database.UserList[i].UserName==this.receiver){
        Database.UserList[i].AddMessage(this.message)
        console.log("Message Sent")
        
        return
      }
    }
  }

  
  ngOnInit() {
    
    
  }

}
