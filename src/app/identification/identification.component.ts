import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notice_period: notice_period[] = [
    {value: '30days', viewValue: '30 Days'},
    {value: '60days', viewValue: '60 Days'},
    {value: '90days', viewValue: '90 Days'},
  ];

}
interface notice_period {
  value: string;
  viewValue: string;
}
