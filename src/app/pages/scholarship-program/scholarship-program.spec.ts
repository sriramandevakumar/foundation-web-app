import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipProgram } from './scholarship-program';

describe('ScholarshipProgram', () => {
  let component: ScholarshipProgram;
  let fixture: ComponentFixture<ScholarshipProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholarshipProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
