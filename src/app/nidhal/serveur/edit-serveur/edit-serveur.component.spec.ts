import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServeurComponent } from './edit-serveur.component';

describe('EditServeurComponent', () => {
  let component: EditServeurComponent;
  let fixture: ComponentFixture<EditServeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditServeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
