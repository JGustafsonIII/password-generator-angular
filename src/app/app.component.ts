import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //@Output() private password!: string;
  public password: string = '';
  public includeLetters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbols: boolean = false;
  public passwordLength: number = 0;
  private debug: boolean = false;

  private displayInfo(): void {
    console.log(`
    Generating passwords with indicated properties:
    Password Length: ${this.passwordLength}
    Include Letters: ${this.includeLetters}
    Include Numbers: ${this.includeNumbers}
    Include Symbols: ${this.includeSymbols}
    `);
  }

  public onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()-=_+';
    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    if (this.debug) {
      this.displayInfo();
    }

    this.password = generatedPassword;
  }

  public onChangeLength(event: Event): void {
    const parsedValue = parseInt((event.target as HTMLInputElement).value);
    this.passwordLength = NaN ? 0 : parsedValue;
    if (parsedValue == NaN) {
      console.error('Parsed Value is NaN');
    }
  }

  public onChangeUseLetters(): void {
    this.includeLetters = !this.includeLetters;
  }

  public onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  public onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }
}
