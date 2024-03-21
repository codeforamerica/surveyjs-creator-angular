import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilemarkerPersonSvgComponent } from './milemarker.person.svg.component';

describe('MilemarkerPersonSvgComponent', () => {
  let component: MilemarkerPersonSvgComponent;
  let fixture: ComponentFixture<MilemarkerPersonSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MilemarkerPersonSvgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilemarkerPersonSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
