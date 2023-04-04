import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RexStoreComponent } from './rex-store.component';

describe('RexStoreComponent', () => {
  let component: RexStoreComponent;
  let fixture: ComponentFixture<RexStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RexStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RexStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
