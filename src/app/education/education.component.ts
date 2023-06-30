import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highlightedCard: number = 0;

  highlightCard(cardNumber: number) {
    this.highlightedCard = cardNumber;
  }

  education_level: education_level[] = [
    {value: 'School', viewValue: 'School'},
    {value: 'ITI', viewValue: 'ITI'},
    {value: 'Polytechnic', viewValue: 'Polytechnic'},
    {value: 'College', viewValue: 'College'},
    {value: 'Training institute', viewValue: 'Training institute'},

  ];

  certificate: certificate[] = [
    {value: 'Mark Sheet', viewValue: 'Mark Sheet'},
    {value: 'TC', viewValue: 'Transfer Certificate'},
    {value: 'Certificate', viewValue: 'Certificate'},

  ];

  skills: skills[] = [
    {value: 'Plumber', viewValue: 'Plumber'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'Mason', viewValue: 'Mason'},
    {value: 'driver', viewValue: 'Driver'},
    {value: 'Watchman', viewValue: 'Watchman'},
  ];

}


interface education_level {
  value: string;
  viewValue: string;
}

interface certificate {
  value: string;
  viewValue: string;
}

interface skills {
  value: string;
  viewValue: string;
}

