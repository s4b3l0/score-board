import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailableServiceComponent } from './view-available-service.component';

describe('ViewAvailableServiceComponent', () => {
  let component: ViewAvailableServiceComponent;
  let fixture: ComponentFixture<ViewAvailableServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAvailableServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAvailableServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
