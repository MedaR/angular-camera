import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationCapteurComponent } from './consultation-capteur.component';

describe('ConsultationCapteurComponent', () => {
  let component: ConsultationCapteurComponent;
  let fixture: ComponentFixture<ConsultationCapteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationCapteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationCapteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
