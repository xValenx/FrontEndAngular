import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionexpComponent } from './seccionexp.component';

describe('SeccionexpComponent', () => {
  let component: SeccionexpComponent;
  let fixture: ComponentFixture<SeccionexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
