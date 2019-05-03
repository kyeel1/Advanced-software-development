import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../log-in/log-in.component';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  screenName;
  imageAddress=CurrentUser.Picture;
  description=CurrentUser.Description;
  display=false;
  constructor() { }

  toggleEdit(){
    if(this.display){
      this.display=false;
      console.log(this.display)
    }
    else{
      this.display=true;
      console.log(this.display)
    }
  }
  saveChanges(){
   CurrentUser.Description=this.description;
   CurrentUser.Picture=this.imageAddress;
    this.display=false;
  }
  ngOnInit() {
  }

  
}

