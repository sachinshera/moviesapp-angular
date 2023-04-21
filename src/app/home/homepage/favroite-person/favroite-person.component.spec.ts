import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavroitePersonComponent } from './favroite-person.component';

describe('FavroitePersonComponent', () => {
  let component: FavroitePersonComponent;
  let fixture: ComponentFixture<FavroitePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavroitePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavroitePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
