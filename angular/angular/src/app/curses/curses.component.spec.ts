import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursesComponent } from './curses.component';

describe('CursesComponent', () => {
  let component: CursesComponent;
  let fixture: ComponentFixture<CursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
