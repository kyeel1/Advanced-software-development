import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGroupPostsComponent } from './top-group-posts.component';

describe('TopGroupPostsComponent', () => {
  let component: TopGroupPostsComponent;
  let fixture: ComponentFixture<TopGroupPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGroupPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGroupPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
