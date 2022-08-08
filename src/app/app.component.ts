import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      username: 'Mountain Lover',
      imageUrl: 'assets/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12',
      imageUrl: 'assets/biking.jpeg',
      content: 'I did some biking today',
    },
    {
      title: 'Lake View',
      username: 'vrunda12',
      imageUrl: 'assets/lake.jpg',
      content: 'This a awesome Lake ..I loved!!!',
    },
  ];

  /* for the hero section data*/

  section_one = {
    title: 'Card with List',
    subtitle: 'Basic of Angular with small project',
  };

  section_two = {
    title: 'Typing Tester',
    subtitle: 'Typing tester app',
  };
}
