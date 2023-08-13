import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
  }

  highlightedCard: number = 0;

  highlightCard(cardNumber: number, language: string) {
    this.highlightedCard = cardNumber;
    this.languageService.setLanguage(language);
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

}
interface Food {
  value: string;
  viewValue: string;
}
