import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonyComponent } from './matrimony.component';

describe('MatrimonyComponent', () => {
  let component: MatrimonyComponent;
  let fixture: ComponentFixture<MatrimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
