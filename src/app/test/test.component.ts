import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  constructor(private reportService: ReportService) { }

  // use case inputs
  use_case: string = 'indoor';
  thrVsCommRadius: boolean = false;
  effVsCommRadius: boolean = false;
  effVsTxPower: boolean = false;
  latVsCommRadius: boolean = false;
  latVsTaskSize: boolean = false;
  selectAll: boolean = false;

  // parameters inputs
  task_size_value: number = 10;
  bandwidth_value: number = 10;
  speed_value: number = 10;
  hops_value: number =5;
  comm_rad_value: number =100;
  num_sam_value: number = 50;

  email:string = "";

  add_inputs_data_reponse: any;

  onSelectAllChange(){
    const selectAll =this.selectAll;
    this.thrVsCommRadius = selectAll;
    this.effVsCommRadius = selectAll;
    this.effVsTxPower = selectAll;
    this.latVsCommRadius = selectAll;
    this.latVsTaskSize = selectAll;


  }
  

  submit_inputs_data(){
    let inputs_data = { 
      use_case: this.use_case,
      thrVsCommRadius: this.thrVsCommRadius,
      effVsCommRadius: this.effVsCommRadius,
      effVsTxPower: this.effVsTxPower,
      latVsCommRadius: this.latVsCommRadius,
      latVsTaskSize: this.latVsTaskSize,

      task_size_value: this.task_size_value,
      bandwidth_value: this.bandwidth_value,
      speed_value: this.speed_value,
      hops_value: this.hops_value,
      comm_rad_value: this.comm_rad_value,
      num_sam_value: this.num_sam_value,

      email: this.email
    }

    this.reportService.add_inputs_data(inputs_data).subscribe(data=>{this.add_inputs_data_reponse = data}, error=>{this.add_inputs_data_reponse = error})
   


  }
  
}
