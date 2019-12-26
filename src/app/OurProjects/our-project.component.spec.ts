import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProjectComponent } from './our-project.component';

describe('OurProjectComponent', () => {
  let component: OurProjectComponent;
  let fixture: ComponentFixture<OurProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
