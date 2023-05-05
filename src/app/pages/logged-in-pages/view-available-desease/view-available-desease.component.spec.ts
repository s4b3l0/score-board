import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailableDeseaseComponent } from './view-available-desease.component';

describe('ViewAvailableDeseaseComponent', () => {
  let component: ViewAvailableDeseaseComponent;
  let fixture: ComponentFixture<ViewAvailableDeseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAvailableDeseaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAvailableDeseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
