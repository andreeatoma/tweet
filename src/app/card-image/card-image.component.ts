import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {Card} from '../card.model';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

	@Input() card: Card[];

  constructor() { }

  ngOnInit() {
  }

}
