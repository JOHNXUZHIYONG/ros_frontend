import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}

  item_id: number = 1;
  
  add_item_body: {"name":string,"price":number} = {"name":"john","price":10};
  add_item_response:any;

  delete_item_id: number = 1;
  delete_item_response:any;

  update_item_id: number = 1;
  update_item_body:any;
  update_item_response:any;

  pdf_id: number = 1;
  report: any;
  item: any;
  body = {"name": "john",
    "price" : 1
  };

  newReport: any;
  pdf: any;

  constructor(private reportService: ReportService) { }

  show_hello(){
    this.reportService.get().subscribe((data) => {
      this.report = data;
    },
    (error) => {
      console.error(error);
    })
  }

  get_item(id:number){
    id = this.item_id;
    this.reportService.get_item(id).subscribe((data) => {
      this.item = data;
    },
    (error) => {
      console.error(error);
    })
  }

  add_item(body:any){
    body = this.add_item_body;
    this.reportService.add_item(body).subscribe((data) => {
      this.add_item_response = data;
    },
    (error) => {
      console.error(error);
    })
  }

delete_item(id:number){
  id = this.delete_item_id
  this.reportService.delete_item(id).subscribe((data)=>{this.delete_item_response = data}, (error)=>{console.error(error)
  ;}  )
}

update_item(id:number,body:any){
  id = this.update_item_id;
  body = this.update_item_body;
  this.reportService.update_item(id,body).subscribe((data)=>{this.update_item_response=data},(error)=>{console.error(error);})
}


f(){
  console.log(123)
}
  get_report(id:number){
    id = this.pdf_id;
    this.reportService.get_report(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `document_${id}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading PDF', error);
    });
  }


  
  

  ngOnInit(): void {
    this.show_hello();
    // this.loadReport(1); // 加载报告，假设 ID 为 1
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
