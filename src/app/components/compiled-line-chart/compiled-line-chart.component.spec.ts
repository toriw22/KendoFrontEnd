import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiledLineChartComponent } from './compiled-line-chart.component';

describe('CompiledLineChartComponent', () => {
  let component: CompiledLineChartComponent;
  let fixture: ComponentFixture<CompiledLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompiledLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiledLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
