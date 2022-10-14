import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SosnaComponent } from './sosna.component';

describe('SosnaComponent', () => {
  let component: SosnaComponent;
  let fixture: ComponentFixture<SosnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SosnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SosnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
