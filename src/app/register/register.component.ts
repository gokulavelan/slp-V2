import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  constructor() { }

  ngOnInit(): void {
  }

  person_title: person_title[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'miss', viewValue: 'Miss'},
  ];

  person_fit: person_fit[] = [
    {value: 'fir', viewValue: 'Physically Fit'},
    {value: 'assistance', viewValue: 'Need Assistance'},

  ];

  blood_group: blood_group[] = [
    {value: 'O+', viewValue: 'O +ve'},
    {value: 'O-', viewValue: 'O -ve'},
    {value: 'A+', viewValue: 'A +ve'},
    {value: 'A-', viewValue: 'A -ve'},
    {value: 'B+', viewValue: 'B +ve'},
    {value: 'B-', viewValue: 'B –ve'},
    {value: 'AB+', viewValue: 'AB +ve'},
    {value: 'AB-', viewValue: 'AB –ve'},
  ];



}
interface person_title {
  value: string;
  viewValue: string;
}

interface person_fit {
  value: string;
  viewValue: string;
}

interface blood_group {
  value: string;
  viewValue: string;
}


