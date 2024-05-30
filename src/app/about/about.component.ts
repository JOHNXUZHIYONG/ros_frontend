import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  teamMembers = [
    { role: 'Technical Lead', name: 'Ernest Tan' },
    { role: 'Project Manager', name: 'Lee Jia Hui' },
    { role: 'Software Developer', name: 'Swagato Barman Roy' },
    { role: 'Software Developer', name: 'Joel Chow' }
  ];

  thankYouMessage = `
    <b>Thank you for using CRP10 Wireless Performance Analysis Framework.</b>
    Please allow some time for the results to be generated. A link to
    download the report will be sent to you upon the completion of the
    calculation(s). To enter a new entry or to use the Wireless
    Performance Analysis, simply click the 'Home' button on the
    navigation bar to start a new entry.
  `;

}
