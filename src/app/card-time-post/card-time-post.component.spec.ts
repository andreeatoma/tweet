import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTimePostComponent } from './card-time-post.component';

describe('CardTimePostComponent', () => {
  let component: CardTimePostComponent;
  let fixture: ComponentFixture<CardTimePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTimePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTimePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
