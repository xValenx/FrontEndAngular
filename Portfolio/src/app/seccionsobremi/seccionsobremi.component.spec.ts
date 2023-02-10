import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionsobremiComponent } from './seccionsobremi.component';

describe('SeccionsobremiComponent', () => {
  let component: SeccionsobremiComponent;
  let fixture: ComponentFixture<SeccionsobremiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionsobremiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionsobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
