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

  state: state[] = [
    {value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh'},
    {value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh'},
    {value: 'Assam', viewValue: 'Assam'},
    {value: 'Bihar', viewValue: 'Bihar'},
    {value: 'Chhattisgarh', viewValue: 'Chhattisgarh'},
    {value: 'Goa', viewValue: 'Goa'},
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Haryana', viewValue: 'Haryana'},
    {value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh'},
    {value: 'Jharkhand', viewValue: 'Jharkhand'},
    {value: 'Karnataka', viewValue: 'Karnataka'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh'},
    {value: 'Maharashtra', viewValue: 'Maharashtra'},
    {value: 'Manipur', viewValue: 'Manipur'},
    {value: 'Meghalaya', viewValue: 'Meghalaya'},
    {value: 'Mizoram', viewValue: 'Mizoram'},
    {value: 'Nagaland', viewValue: 'Nagaland'},
    {value: 'Odisha', viewValue: 'Odisha'},
    {value: 'Punjab', viewValue: 'Punjab'},
    {value: 'Rajasthan', viewValue: 'Rajasthan'},
    {value: 'Sikkim', viewValue: 'Sikkim'},
    {value: 'Tamil Nadu', viewValue: 'Tamil Nadu'},
    {value: 'Telangana', viewValue: 'Telangana'},
    {value: 'Tripura', viewValue: 'Tripura'},
    {value: 'Uttar Pradesh', viewValue: 'Uttar Pradesh'},
    {value: 'Uttarakhand', viewValue: 'Uttarakhand'},
    {value: 'West Bengal', viewValue: 'West Bengal'},

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

interface state {
  value: string;
  viewValue: string;
}
