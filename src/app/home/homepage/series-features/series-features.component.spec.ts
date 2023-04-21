import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesFeaturesComponent } from './series-features.component';

describe('SeriesFeaturesComponent', () => {
  let component: SeriesFeaturesComponent;
  let fixture: ComponentFixture<SeriesFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriesFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
