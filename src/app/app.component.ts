import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swiss_theme';
  tiles = [ {
    text: 'Four',
    cols: 2,
    rows: 1,
    color: '#DDBDF1'
  }]

}
