import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccountComponent } from './home-account.component';

describe('HomeAccountComponent', () => {
  let component: HomeAccountComponent;
  let fixture: ComponentFixture<HomeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
