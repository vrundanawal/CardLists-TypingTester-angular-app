import { Component } from '@angular/core';

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
      imageUrl: 'assests/tree.jpeg',
      content: 'I saw this neat tree today',
    },
    {
      title: 'Snowy Mountain',
      username: 'Mountain Lover',
      imageUrl: 'assests/mountain.jpeg',
      content: 'Here is a picture of a snowy mountain',
    },
    {
      title: 'Mountain Biking',
      username: 'biking12',
      imageUrl: 'assests/biking.jpeg',
      content: 'I did some biking today',
    },
  ];
}
