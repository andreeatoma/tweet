import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../card.model';

@Component({
  selector: 'app-card-time-post',
  templateUrl: './card-time-post.component.html',
  styleUrls: ['./card-time-post.component.css']
})
export class CardTimePostComponent implements OnInit {
	@Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

}
