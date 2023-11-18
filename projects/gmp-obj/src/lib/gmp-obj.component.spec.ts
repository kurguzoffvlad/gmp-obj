import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpObjComponent } from './gmp-obj.component';

describe('GmpObjComponent', () => {
  let component: GmpObjComponent;
  let fixture: ComponentFixture<GmpObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
