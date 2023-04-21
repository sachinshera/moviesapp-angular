import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOnComponent } from './only-on.component';

describe('OnlyOnComponent', () => {
  let component: OnlyOnComponent;
  let fixture: ComponentFixture<OnlyOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
