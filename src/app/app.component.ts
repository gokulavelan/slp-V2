import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  isLoading: boolean = true;
  constructor() {
    // Simulate app initialization delay
    setTimeout(() => {
      this.isLoading = false;
    }, 1000); // Set the duration as needed
  }

  title = 'swiss_theme';
  tiles = [ {
    text: 'Four',
    cols: 2,
    rows: 1,
    color: '#DDBDF1'
  }]
  // Simulate app initialization delay

}
