import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringHistoryComponent } from './monitoring-history.component';

describe('HistoryMonitorComponent', () => {
  let component: MonitoringHistoryComponent;
  let fixture: ComponentFixture<MonitoringHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoringHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoringHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
