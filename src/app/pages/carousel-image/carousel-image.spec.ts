import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselImage } from './carousel-image';

describe('CarouselImage', () => {
  let component: CarouselImage;
  let fixture: ComponentFixture<CarouselImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
