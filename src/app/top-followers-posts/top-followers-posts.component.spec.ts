import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFollowersPostsComponent } from './top-followers-posts.component';

describe('TopFollowersPostsComponent', () => {
  let component: TopFollowersPostsComponent;
  let fixture: ComponentFixture<TopFollowersPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFollowersPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFollowersPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
