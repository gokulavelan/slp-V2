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
    {value: 'Arc Welding', viewValue: 'Arc Welding'},
    {value: 'Electron Beam and Laser Welding', viewValue: 'Electron Beam and Laser Welding'},
    {value: 'Fabrication', viewValue: 'Fabrication'},
    {value: 'Flux Cored Arc Welding (FCAW)', viewValue: 'Flux Cored Arc Welding (FCAW)'},
    {value: 'Fillet & Butt weld gauges', viewValue: 'Fillet & Butt weld gauges'},
    {value: 'Gas Welding', viewValue: 'Gas Welding'},
    {value: 'Grinding', viewValue: 'Grinding'},
    {value: 'Gas Tungsten Arc Welding (GTAW)', viewValue: 'Gas Tungsten Arc Welding (GTAW)'},
    {value: 'Industrial Welding', viewValue: 'Industrial Welding'},
    {value: 'Metal fabrication', viewValue: 'Metal fabrication'},
    {value: 'Metal Inert Gas (MIG) Welding', viewValue: 'Metal Inert Gas (MIG) Welding'},
    {value: 'Gas Metal Arc Welding (GMAW)', viewValue: 'Gas Metal Arc Welding (GMAW)'},
    {value: 'Oxy- Fuel', viewValue: 'Oxy- Fuel'},
    {value: 'Pipe welding', viewValue: 'Pipe welding'},
    {value: 'Plasma Arc Welding', viewValue: 'Plasma Arc Welding'},
    {value: 'Robotic welding Equipment', viewValue: 'Robotic welding Equipment'},
    {value: 'Safety standards', viewValue: 'Safety standards'},
    {value: 'Shielded Metal Arc Welding (SMAW)', viewValue: 'Shielded Metal Arc Welding (SMAW)'},
    {value: 'Stick welding', viewValue: 'Stick welding'},
    {value: 'Tungsten Inert Gas (TIG) Welding', viewValue: 'Tungsten Inert Gas (TIG) Welding'},
    {value: 'Welding', viewValue: 'Welding'},

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

