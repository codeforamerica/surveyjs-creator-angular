import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplatesComponent } from './survey-templates.component';

describe('SurveyTemplatesComponent', () => {
  let component: SurveyTemplatesComponent;
  let fixture: ComponentFixture<SurveyTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurveyTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
