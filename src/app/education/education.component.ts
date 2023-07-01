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

