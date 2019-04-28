import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'practice';
  show: boolean = false;
  log:number[];
  tracker:number =0;
  disappear()
  {
  this.show = true;
  this.tracker+=1;
  this.log.push(this.tracker);
  
}
onclickHome = true;
onclickLogIn = false;
onclickSignUp = false;
onclickProfile = false;
onclickInbox = false;
onclickSocial =false;
onclickGroups = false;
onclickTopPost = false;
onclickTopGroupPost = false;
onclickTopBattles = false;
onclickTopFollowing = false;
myClickFunction(event,name : String) {
this.onclickHome = false;
this.onclickLogIn = false;
this.onclickSignUp = false;
this.onclickProfile = false;
this.onclickInbox = false;
this.onclickSocial =false;
this.onclickGroups = false;
this.onclickTopPost = false;
this.onclickTopGroupPost = false;
this.onclickTopBattles = false;
this.onclickTopFollowing = false; 
  switch(name){
    case "LogIn" :{
      this.onclickLogIn = true;
      break;
    }
    case "SignUp":{
      this.onclickSignUp = true;
      break;
    }
    case 'Profile':{
      this.onclickProfile = true;
      break;
    }
    case "Inbox":{
      this.onclickInbox = true;
      break;
    }
    case "Social":{
      this.onclickSocial = true;
      break;
    }
    case "Groups":{
      this.onclickGroups = true;
      break;
    }
    case "TopPost":{
      this.onclickTopPost = true;
      break;
    }
    case "TopGroupPost":{
      this.onclickTopGroupPost = true;
      break;
    }
    case "TopBattles":{
      this.onclickTopBattles = true;
      break;
    }
    case "TopFollowing":{
      this.onclickTopFollowing = true;
      break;
    }
    case "Home":{
      this.onclickHome = true;
    }
  }
}

}


