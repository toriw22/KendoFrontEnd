import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTypeComponent } from './add-edit-type.component';

describe('AddEditTypeComponent', () => {
  let component: AddEditTypeComponent;
  let fixture: ComponentFixture<AddEditTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
