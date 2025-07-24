import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationPage } from './foundation-page';

describe('FoundationPage', () => {
  let component: FoundationPage;
  let fixture: ComponentFixture<FoundationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoundationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
