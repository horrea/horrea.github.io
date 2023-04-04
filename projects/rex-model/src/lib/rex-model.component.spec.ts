import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexModelComponent } from './rex-model.component';

describe('RexModelComponent', () => {
  let component: RexModelComponent;
  let fixture: ComponentFixture<RexModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RexModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
