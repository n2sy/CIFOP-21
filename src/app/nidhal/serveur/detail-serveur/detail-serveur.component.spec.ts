import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServeurComponent } from './detail-serveur.component';

describe('DetailServeurComponent', () => {
  let component: DetailServeurComponent;
  let fixture: ComponentFixture<DetailServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailServeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
