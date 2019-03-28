import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCapteurComponent } from './formulaire-capteur.component';

describe('FormulaireCapteurComponent', () => {
  let component: FormulaireCapteurComponent;
  let fixture: ComponentFixture<FormulaireCapteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireCapteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
