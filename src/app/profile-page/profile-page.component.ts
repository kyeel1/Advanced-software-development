import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
export class User {
  constructor(UN,P,DN){this.UserName = UN,this.Password = P,this.DisplayName = DN}
  UserName: string;
  Password: string;
  DisplayName: string;
  Description: String;
  Picture: String;//stores the link to the picture
  Followers: User[];
  Following: User[];
  //groups: groups[];
  //messages: messages[];
  //posts: posts[];
  //Addgroup(){};
  //AddMessage(){};
  //AddPicture(){};
  //AddFollowers(){};
  //AddFollowing(){};
}
