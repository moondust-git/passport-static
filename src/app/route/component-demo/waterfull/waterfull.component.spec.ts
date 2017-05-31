import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfullComponent } from './waterfull.component';

describe('WaterfullComponent', () => {
  let component: WaterfullComponent;
  let fixture: ComponentFixture<WaterfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
