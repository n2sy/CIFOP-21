import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrueComponent } from './recrue.component';

describe('RecrueComponent', () => {
  let component: RecrueComponent;
  let fixture: ComponentFixture<RecrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecrueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
