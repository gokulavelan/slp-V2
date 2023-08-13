import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguage: string = 'en'; // Default language

  getLanguage(): string {
    return this.selectedLanguage;
  }

  setLanguage(language: string): void {
    this.selectedLanguage = language;
  }
}
