import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedTemplateComponent } from './feed-template.component';

describe('FeedTemplateComponent', () => {
  let component: FeedTemplateComponent;
  let fixture: ComponentFixture<FeedTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
