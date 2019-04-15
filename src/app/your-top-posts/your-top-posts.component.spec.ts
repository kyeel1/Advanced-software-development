import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTopPostsComponent } from './your-top-posts.component';

describe('YourTopPostsComponent', () => {
  let component: YourTopPostsComponent;
  let fixture: ComponentFixture<YourTopPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourTopPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourTopPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
