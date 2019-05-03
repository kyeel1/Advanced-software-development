import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FeedTemplateComponent } from './feed-template/feed-template.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { TopFollowersPostsComponent } from './top-followers-posts/top-followers-posts.component';
import { TopGroupPostsComponent } from './top-group-posts/top-group-posts.component';
import { YourTopPostsComponent } from './your-top-posts/your-top-posts.component';
import { PostInformationComponent } from './post-information/post-information.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { WarsComponent } from './wars/wars.component';
import { BattlesComponent } from './battles/battles.component';
import { SocialComponent } from './social/social.component';
import { GroupComponent } from './group/group.component';
import { MessagingComponent } from './messaging/messaging.component';
import { from } from 'rxjs';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedTemplateComponent,
    TopPostsComponent,
    TopFollowersPostsComponent,
    TopGroupPostsComponent,
    YourTopPostsComponent,
    PostInformationComponent,
    ProfilePageComponent,
    LogInComponent,
    WarsComponent,
    BattlesComponent,
    SocialComponent,
    GroupComponent,
    MessagingComponent,
    PostCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
