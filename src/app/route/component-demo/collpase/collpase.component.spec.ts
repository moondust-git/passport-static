import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollpaseComponent } from './collpase.component';

describe('CollpaseComponent', () => {
  let component: CollpaseComponent;
  let fixture: ComponentFixture<CollpaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollpaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollpaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
