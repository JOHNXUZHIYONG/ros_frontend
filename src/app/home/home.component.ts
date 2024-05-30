import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  sliderValue: number = 50;

  formData = {
    data1: 0,
    data2: 0,
    // 添加更多的数据字段
  };

  submitData() {
    // 将表单数据提交给后端
    console.log('Form data:', this.formData);
    // 在这里调用 HTTP 请求将表单数据发送给后端
  }

  task_size_value: number = 10;
  bandwidth_value: number = 10;
  speed_value: number = 20;
  hops_value: number = 3;
  comm_rad_value: number = 200;
  num_sam_value: number = 10;
  num_value: number = 5;
  

  resetValues() {
    this.task_size_value = 10;
    this.bandwidth_value = 10;
    this.speed_value = 20;
    this.hops_value = 3;
    this.comm_rad_value = 200;
    this.num_sam_value = 10;
    this.num_value = 5;
    


  }

  email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = '';

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

}
