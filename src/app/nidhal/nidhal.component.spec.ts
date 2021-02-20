import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NidhalComponent } from './nidhal.component';

describe('NidhalComponent', () => {
  let component: NidhalComponent;
  let fixture: ComponentFixture<NidhalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NidhalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NidhalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
