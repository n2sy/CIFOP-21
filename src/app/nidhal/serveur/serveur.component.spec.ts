import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurComponent } from './serveur.component';

describe('ServeurComponent', () => {
  let component: ServeurComponent;
  let fixture: ComponentFixture<ServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
