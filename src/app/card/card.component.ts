import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //@Input is a decorator
  @Input() title = '';
  @Input() username = '';
  @Input() imageUrl = '';
  @Input() content = '';

  constructor() {}

  ngOnInit(): void {}
}
