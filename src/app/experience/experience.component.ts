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

  industry_type: industry_type[] = [
    {value: 'Agriculture', viewValue: 'Agriculture'},
    {value: 'Construction', viewValue: 'Construction'},
    {value: 'Healthcare & Support', viewValue: 'Healthcare & Support'},
    {value: 'Hospitality & Service', viewValue: 'Hospitality & Service'},
    {value: 'Manufacturing', viewValue: 'Manufacturing'},
    {value: 'Mining & Extraction', viewValue: 'Mining & Extraction'},
    {value: 'Maintenance & Repair', viewValue: 'Maintenance & Repair'},
    {value: 'Transportation & Logistics', viewValue: 'Transportation & Logistics'},
    {value: 'Textile & Garment', viewValue: 'Textile & Garment'},
    {value: 'Waste management & recycling', viewValue: 'Waste management & recycling'},


  ];

}
interface notice_period {
  value: string;
  viewValue: string;
}

interface industry_type {
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
