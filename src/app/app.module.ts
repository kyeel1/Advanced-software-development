import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopPostsComponent } from './top-posts/top-posts.component';
import { TopFollowersPostsComponent } from './top-followers-posts/top-followers-posts.component';
import { TopGroupPostsComponent } from './top-group-posts/top-group-posts.component';
import { YourTopPostsComponent } from './your-top-posts/your-top-posts.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SocialComponent } from './social/social.component';
import { GroupComponent } from './group/group.component';
import { MessagingComponent } from './messaging/messaging.component';
import { from } from 'rxjs';
import { PostCardComponent } from './post-card/post-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    TopPostsComponent,
    TopFollowersPostsComponent,
    TopGroupPostsComponent,
    YourTopPostsComponent,
    ProfilePageComponent,
    LogInComponent,
    SocialComponent,
    GroupComponent,
    MessagingComponent,
    PostCardComponent,
    HomePageComponent,
    CreatePostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
