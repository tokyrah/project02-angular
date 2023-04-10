import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnDetailComponent } from './compagn-detail.component';

describe('CompagnDetailComponent', () => {
  let component: CompagnDetailComponent;
  let fixture: ComponentFixture<CompagnDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompagnDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
