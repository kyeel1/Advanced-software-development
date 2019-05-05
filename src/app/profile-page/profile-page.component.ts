import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../log-in/log-in.component';
import { ClickedUser } from '../database/database.module';
import { UserModule } from '../user/user.module';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  
  screenName=ClickedUser.DisplayName;
  imageAddress=ClickedUser.Picture;
  description=ClickedUser.Description;
  display=false;
  compare=ClickedUser.Password==CurrentUser.Password;
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

