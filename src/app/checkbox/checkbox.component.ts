import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {

  task: Task = {
    name: 'Choose all the options',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Calculate Throughput vs Communication Radius', completed: false, color: 'primary'},
      {name: 'Calculate Energy Efficiency vs Communication Radius', completed: false, color: 'primary'},
      {name: 'Calculate Energy Efficiency vs Transmit Power (dBm)', completed: false, color: 'primary'},
      {name: 'Calculate Latency vs Communication Radius', completed: false, color: 'primary'},
      {name: 'Calculate Latency vs Task size', completed: false, color: 'primary'},
    
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }

}
