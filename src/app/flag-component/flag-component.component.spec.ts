import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagComponentComponent } from './flag-component.component';

describe('FlagComponentComponent', () => {
  let component: FlagComponentComponent;
  let fixture: ComponentFixture<FlagComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
