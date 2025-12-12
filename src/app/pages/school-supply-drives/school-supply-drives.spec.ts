import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSupplyDrives } from './school-supply-drives';

describe('SchoolSupplyDrives', () => {
  let component: SchoolSupplyDrives;
  let fixture: ComponentFixture<SchoolSupplyDrives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolSupplyDrives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolSupplyDrives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
