import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessageModule {
  receiver:String;
  sender: String;
  message:String;


  getMessage(){

    return this.message;
  }
  constructor(Receiver,Sender,Message){this.receiver=Receiver, this.sender=Sender, this.message=Message}
 }
