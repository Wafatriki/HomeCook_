import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepsOfRecipesComponent } from './steps-of-recipes.component';

describe('StepsOfRecipesComponent', () => {
  let component: StepsOfRecipesComponent;
  let fixture: ComponentFixture<StepsOfRecipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StepsOfRecipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsOfRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
