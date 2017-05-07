import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../card.model';


@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css']
})
export class CardLinkComponent implements OnInit {
	@Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

}
