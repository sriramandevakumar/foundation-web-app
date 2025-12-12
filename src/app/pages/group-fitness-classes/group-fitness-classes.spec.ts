import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFitnessClasses } from './group-fitness-classes';

describe('GroupFitnessClasses', () => {
  let component: GroupFitnessClasses;
  let fixture: ComponentFixture<GroupFitnessClasses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupFitnessClasses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupFitnessClasses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
