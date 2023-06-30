import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highlightedExpCard: number = 0;

  highlightCard(cardNumber: number) {
    this.highlightedExpCard = cardNumber;
  }

  highlightedCard: number = 0;

  highlightEmploymentCard(cardNumber: number) {
    this.highlightedCard = cardNumber;
  }
  highlightEmploymentCardType(cardNumber: number) {
    this.highlightedCard = cardNumber;
  }

  

  notice_period: notice_period[] = [
    {value: '30days', viewValue: '30 Days'},
    {value: '60days', viewValue: '60 Days'},
    {value: '90days', viewValue: '90 Days'},
  ];

  experience: experience[] = [
    {value: 'intern', viewValue: 'Intern'},
    {value: 'experience', viewValue: 'Experience'},

  ];

  experience_type: experience_type[] = [
    {value: 'month', viewValue: 'Month'},
    {value: 'year', viewValue: 'Year'},

  ];

  job_title: job_title[] = [
    {value: 'Plumber', viewValue: 'Plumber'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'Mason', viewValue: 'Mason'},
    {value: 'driver', viewValue: 'Driver'},
    {value: 'Watchman', viewValue: 'Watchman'},
  ];
  skills: skills[] = [
    {value: 'Plumber', viewValue: 'Plumber'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'Mason', viewValue: 'Mason'},
    {value: 'driver', viewValue: 'Driver'},
    {value: 'Watchman', viewValue: 'Watchman'},
  ];


}
interface notice_period {
  value: string;
  viewValue: string;
}

interface experience {
  value: string;
  viewValue: string;
}

interface experience_type {
  value: string;
  viewValue: string;
}
interface job_title {
  value: string;
  viewValue: string;
}
interface skills {
  value: string;
  viewValue: string;
}
