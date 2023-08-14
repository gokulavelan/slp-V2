import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ["Adarsh Shayam Dev Private Industrial Training Institute - ITI, Jaunpur , Uttar Pradesh",
"Advanced Training Institute - ATI, Howrah , West Bengal",
"Addwait Mahila Audyogik Evam Shilpa Kala Shikshan Kendra, Barabanki , Uttar Pradesh",
"Advanced Training Institute - ATI, Ludhiana , Punjab",
"Agra Private Industrial Training Institute - ITI, Agra , Uttar Pradesh",
"Advanced Training Institute - ATI, Hyderabad , Telangana",
"AGRAWAL INDUSTRIAL TRAINING INSTITUTE, Jaipur , Rajasthan",
"Adesh Private Industrial Training Institute - ITI, Pilibhit , Uttar Pradesh",
"Advanced Training Institute for Electronics and Process Instrumentation, Hyderabad , Telangana",
"ADFS Private Industrial Training Institute - ITI, Agra , Uttar Pradesh",
"AECS Pavan Industrial Training Institute, Kolar , Karnataka",
"Adhaar Private Industrial Training Institute - ITI, Allahabad , Uttar Pradesh",
"AFWWA Private Industrial Training Institute - ITI, Kanpur Nagar , Uttar Pradesh",
"Adharshila Private Industrial Training Institute - ITI, Meerut , Uttar Pradesh",
"Agardi Prasad Yadav Private Industrial Training Institute - ITI, Jaunpur , Uttar Pradesh",
"Aditya Private Industrial Training Institute - APITI, Mirzapur , Uttar Pradesh",
"Aditya Private Industrial Training Institute - APITI, Mirzapur , Uttar Pradesh",
"Agnel Industrial Training Institute,South Goa , Goa",
"Advance Institute of Information and Computer Technology, Ghaziabad , Uttar Pradesh",
"Agra Glory Private Industrial Training Institute - ITI, Agra , Uttar Pradesh",
"Advanced Training Institute - ATI, Ludhiana , Punjab",
"Agra Private Industrial Training Institute - ITI, Agra , Uttar Pradesh",
"Advanced Training Institute - ATI, Hyderabad , Telangana",
"Adarsh Private Industrial Training Institute - ITI, Ghaziabad , Uttar Pradesh",
"Achiever Industrial Training Institute - ITI, Mahendragarh , Haryana",
"Adarsh Private Industrial Training Institute - ITI, Bulandshahr , Uttar Pradesh",
"Acharya Private Industrial Training Institute - ITI, Deoria , Uttar Pradesh",
"Adarsh Private Industrial Training Institute - ITI, Banda , Uttar Pradesh",
"Abha Private Industrial Training Institute - ITI,Ambedkar Nagar , Uttar Pradesh",
"A.S. Private Industrial Training Institute - ITI,Aligarh , Uttar Pradesh",
"Abhilasha Private Industrial Training Institute - ITI,Ambedkar Nagar , Uttar Pradesh",
"A.Y.T. Private Industrial Training Institute - ITI,Deoria , Uttar Pradesh",
"Physically Abhiraji Devi Private Industrial Training Institute - ITI, Basti,Uttar Pradesh",
"Chandy Industrial Training Centre, Thoothukudi , Tamil Nadu",
"Swamy Vivekananda Industrial Training Institute, Chennai , Tamil Nadu",
"Sri Bharathi Industrial School, Vellore , Tamil Nadu",
"Sri Ramakrishna Advanced Training Institute - SRATI , Coimbatore , Tamil Nadu",
"Sri Vinayaga Private Industrial Training Institute, Salem , Tamil Nadu",

"St. John's Private Industrial Training Institute - ITI, Tiruchirappalli , Tamil Nadu",];

  filteredOptions!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  highlightedCard: number = 0;

  highlightCard(cardNumber: number) {
    this.highlightedCard = cardNumber;
  }

  education_level: education_level[] = [
    {value: 'Under 10th', viewValue: 'Under 10th'},
    {value: '10th Pass', viewValue: '10th Pass'},
    {value: '12th Pass', viewValue: '12th Pass'},
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
    {value: 'Electrician', viewValue: 'Electrician'},
    {value: 'Fitter', viewValue: 'Fitter'},
    {value: 'Welder', viewValue: 'Welder'},
    {value: 'Mechanic (Motor Vehicle)', viewValue: 'Mechanic (Motor Vehicle)'},
    {value: 'Turner', viewValue: 'Turner'},
    {value: 'Machinist', viewValue: 'Machinist'},
    {value: 'Plumber', viewValue: 'Plumber'},
    {value: 'Carpenter', viewValue: 'Carpenter'},
    {value: 'Refrigeration and Air Conditioning', viewValue: 'Refrigeration and Air Conditioning'},
    {value: 'Electronics Mechanic', viewValue: 'Electronics Mechanic'},
    {value: 'Computer Operator and Programming Assistant (COPA)', viewValue: 'Computer Operator and Programming Assistant (COPA)'},
    {value: 'Information Technology and Electronic System Maintenance (IT & ESM)', viewValue: 'Information Technology and Electronic System Maintenance (IT & ESM)'},
    {value: 'Draughtsman (Civil / Mechanical)', viewValue: 'Draughtsman (Civil / Mechanical)'},
    {value: ' Instrument Mechanic', viewValue: ' Instrument Mechanic'},
    {value: 'Surveyor', viewValue: 'Surveyor'},
    {value: 'Mechanic Diesel', viewValue: 'Mechanic Diesel'},
    {value: 'Tool and Die Maker', viewValue: 'Tool and Die Maker'},
    {value: 'Electrician (Power Distribution)', viewValue: 'Electrician (Power Distribution)'},
    {value: 'Wireman', viewValue: 'Wireman'},
    {value: ' Mechanic Radio and Television (MRTV)', viewValue: ' Mechanic Radio and Television (MRTV)'},
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

