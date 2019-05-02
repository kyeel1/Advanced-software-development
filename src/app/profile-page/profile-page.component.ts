import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../log-in/log-in.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  posts=CurrentUser.posts;
}

