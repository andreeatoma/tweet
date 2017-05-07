import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../card.model';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css']
})
export class CardDescriptionComponent implements OnInit {
	@Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

}
