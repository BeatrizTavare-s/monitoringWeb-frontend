import { Component, OnInit, ViewChild } from '@angular/core';
import { MonitoringHistoryService } from '../../services/monitoringHistory.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


export interface CheckHistory {
	site: {
    _id: string,
    port: number,
    url:string,
  },
  status: string,
  responseTimeMs: number
}


@Component({
  selector: 'app-monitoring-history',
  templateUrl: './monitoring-history.component.html',
  styleUrl: './monitoring-history.component.css'
})

export class MonitoringHistoryComponent implements OnInit {
  displayedColumns: string[] = ['port', 'url', 'status', 'responseTimeMs'];
  dataSource: MatTableDataSource<CheckHistory>;
  monitoringHistory: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private monitoringHistoryService: MonitoringHistoryService) { 
    this.dataSource = new MatTableDataSource<CheckHistory>();
  }

  ngOnInit(): void {
    this.monitoringHistoryService.getMonitoringHistoryService().subscribe((data: CheckHistory[]) => {
      this.monitoringHistory = data;
      this.dataSource.data = this.monitoringHistory;
      this.dataSource.paginator = this.paginator;
    });
  }
  onPageChange(event: PageEvent): void {}
}
