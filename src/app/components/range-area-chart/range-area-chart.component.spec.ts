import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeAreaChartComponent } from './range-area-chart.component';

describe('RangeAreaChartComponent', () => {
  let component: RangeAreaChartComponent;
  let fixture: ComponentFixture<RangeAreaChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeAreaChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
