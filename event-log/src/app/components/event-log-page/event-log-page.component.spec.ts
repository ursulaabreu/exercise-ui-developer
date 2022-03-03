import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLogPageComponent } from './event-log-page.component';

describe('EventLogPageComponent', () => {
  let component: EventLogPageComponent;
  let fixture: ComponentFixture<EventLogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventLogPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
