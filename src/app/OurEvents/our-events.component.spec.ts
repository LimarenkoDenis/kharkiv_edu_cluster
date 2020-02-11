import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurEventsComponent } from './our-events.component';

describe('OurEventsComponent', () => {
  let component: OurEventsComponent;
  let fixture: ComponentFixture<OurEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
