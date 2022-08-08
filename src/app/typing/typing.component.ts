import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.css'],
})
export class TypingComponent implements OnInit {
  //to generate the random text using faker package
  randomText = faker.lorem.sentence();
  enteredText = '';

  handleOnInput(value: string) {
    console.log('value :- ' + value);
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    //using ternory operotor
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
  constructor() {}
  ngOnInit(): void {}
}
