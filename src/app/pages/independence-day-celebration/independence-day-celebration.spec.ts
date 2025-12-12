import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependenceDayCelebration } from './independence-day-celebration';

describe('IndependenceDayCelebration', () => {
  let component: IndependenceDayCelebration;
  let fixture: ComponentFixture<IndependenceDayCelebration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndependenceDayCelebration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndependenceDayCelebration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
