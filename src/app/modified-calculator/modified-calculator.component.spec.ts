import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiedCalculatorComponent } from './modified-calculator.component';

describe('ModifiedCalculatorComponent', () => {
  let component: ModifiedCalculatorComponent;
  let fixture: ComponentFixture<ModifiedCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifiedCalculatorComponent]
    });
    fixture = TestBed.createComponent(ModifiedCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
