import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.scss'],
})
export class CardsComponentComponent implements OnInit {
  @Input() card: Card;

  constructor() {}

  ngOnInit(): void {}
}
