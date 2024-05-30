import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  thankYouMessage: string = "To use this Wireless Application Framework, simply click 'HOME' on the top navigation bar. Click on the use case you would like to analyse for. Enter the parameters and fill in your email address. A link to the report will be sent to you upon completion of the calculation(s).";

}
