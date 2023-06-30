import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employer-register',
  templateUrl: './employer-register.component.html',
  styleUrls: ['./employer-register.component.scss']
})
export class EmployerRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  job_title: job_title[] = [
    {value: 'Plumber', viewValue: 'Plumber'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'Mason', viewValue: 'Mason'},
    {value: 'driver', viewValue: 'Driver'},
    {value: 'Watchman', viewValue: 'Watchman'},
  ];

}
interface job_title {
  value: string;
  viewValue: string;
}
