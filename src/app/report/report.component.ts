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
  get_item_response :any;
  
  add_item_body: {"name":string,"price":number} = {"name":"john","price":10};
  add_item_response:any;

  delete_item_id: number = 1;
  delete_item_response:any;

  update_item_id: number = 1;
  update_item_body:any;
  update_item_response:any;

  get_user_id: number = 1;
  get_user_response: any;

  add_user_body: {"name":string, "email":string} = {"name":"john", "email":"john@email"};
  add_user_response: any;

  delete_user_id: number = 1;
  delete_user_response:any;

  update_user_id: number = 1;
  update_user_body:any;
  update_user_response:any;

  get_pdf_id: number = 1;
  get_pdf_response:any;

  add_pdf_id: number =1;
  add_pdf_body: {'content':string} = {'content': ""};
  add_pdf_response: any;

  delete_pdf_id:number = 1;
  delete_pdf_response:any;

  update_pdf_id:number = 1;
  update_pdf_body: {"content": string} = {'content':""};
  update_pdf_response: any;


  constructor(private reportService: ReportService) { }

  get_item(id:number){
    id = this.item_id;
    this.reportService.get_item(id).subscribe((data) => {
      this.get_item_response = data;
    },
    (error) => {
      this.get_item_response=error;
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
  this.reportService.update_item(id,body).subscribe((data)=>{this.update_item_response=data},(error)=>{this.update_item_response=error;})
}

get_user(id:number){
  id = this.get_user_id
  this.reportService.get_user(id).subscribe((data)=>{this.get_user_response = data;}, (error)=>{this.get_user_response=error;})
}

add_user(body:any){
  body = this.add_user_body;
  this.reportService.add_user(body).subscribe((data)=>{this.add_user_response  =data;}, (error)=>{this.add_user_response=error;})
}

delete_user(id:number){
  id = this.delete_user_id;
  this.reportService.delete_user(id).subscribe((data)=>{this.delete_user_response = data}, (error)=>{this.delete_user_response=error})
}

update_user(id:number,body:any)
{
  id = this.update_user_id;
  body = this.update_user_body;
  this.reportService.update_user(id,body).subscribe((data)=>{this.update_user_response=data},(error)=>{this.update_user_response=error})
}

// pdf
get_pdf (id:number){
  id = this.get_pdf_id;
  this.reportService.get_pdf(id).subscribe(  blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `document_${id}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  },
  error=>{this.get_pdf_response = error}
)
}

add_pdf(id:number, body:any){
  id =  this.add_pdf_id;
  body = this.add_pdf_body;
  console.log(body)
  this.reportService.add_pdf(id,body).subscribe( data =>{this.add_pdf_response = data}, error =>{this.add_pdf_response=error}  )
}

delete_pdf(id:number){
  id = this.delete_pdf_id;
  this.reportService.delete_pdf(id).subscribe((data)=>{this.delete_pdf_response = data}, (error)=>{this.delete_pdf_response = error})
}

update_pdf(id:number, body:any){
  id = this.update_pdf_id;
  body = this.update_pdf_body;
  this.reportService.update_pdf(id,body).subscribe((data)=>{this.update_pdf_response = data}, error=>{this.update_pdf_response = error;})
}


  ngOnInit(): void {
   
  }

  
}
