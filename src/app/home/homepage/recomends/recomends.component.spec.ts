import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendsComponent } from './recomends.component';

describe('RecomendsComponent', () => {
  let component: RecomendsComponent;
  let fixture: ComponentFixture<RecomendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecomendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
