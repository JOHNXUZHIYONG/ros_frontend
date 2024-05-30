import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  task_size_value: number = 10;
  bandwidth_value: number = 10;
  speed_value: number = 20;
  hops_value: number = 3;
  comm_rad_value: number = 200;
  num_sam_value: number = 10;
  num_value: number = 5;


  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

}
