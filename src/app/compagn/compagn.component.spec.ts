import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnComponent } from './Compagn.component';

describe('CompagnComponent', () => {
  let component: CompagnComponent;
  let fixture: ComponentFixture<CompagnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompagnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
