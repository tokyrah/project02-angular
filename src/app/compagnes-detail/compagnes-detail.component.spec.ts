import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnesDetailComponent } from './compagnes-detail.component';

describe('CompagnesDetailComponent', () => {
  let component: CompagnesDetailComponent;
  let fixture: ComponentFixture<CompagnesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagnesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompagnesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
