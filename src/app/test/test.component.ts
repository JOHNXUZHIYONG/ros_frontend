import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  report: any;
  newReport: any;

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReport(1); // 加载报告，假设 ID 为 1
  }

  loadReport(id: number): void {
    this.reportService.getReport(id).subscribe(
      (data) => {
        this.report = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addReport(): void {
    this.reportService.insertReport(this.newReport).subscribe(
      (data) => {
        console.log('Report added successfully:', data);
        this.loadReport(data.id); // 加载新添加的报告
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteReport(id: number): void {
    this.reportService.deleteReport(id).subscribe(
      () => {
        console.log('Report deleted successfully');
        this.report = null; // 清空报告
      },
      (error) => {
        console.error(error);
      }
    );
  }

}
