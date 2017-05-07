import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input () card: Card[];
  cards : Card[];

  constructor() {
  	 this.cards = [
  	 	new Card(
      '1',
      'InVision', 
      '@InVisionApp',
      ' • 2h',
      'If we dont start giving new designers a chance the design industry will crumble',
      'bit.ly/1LHhCfr@jma245',
      './assets/images/img1.jpg'),
      new Card(
      '2',
      'InVision', 
      '@InVisionApp',
      ' • 16 Mar 2016',
      'Integration of user-centered thinking & product development...',
      '',
      './assets/images/img2.jpg'),
      new Card(
      '3',
      'InVision', 
      '@InVisionApp',
      ' • 13 Mar 2016',
      'Want to accelerate your design workflow using Sketch? Take...',
      '',
      './assets/images/img2.jpg'),
      new Card(
      '4',
      'InVision', 
      '@InVisionApp',
      ' • 12 Mar 2016',
      'How to Become a Great UX Designer Without a Degree',
      'bit.ly/1PzKxN4  @rikegeiken ',
      './assets/images/img1.jpg'),
      new Card(
      '5',
      'InVision', 
      '@InVisionApp',
      ' • 10 Mar 2016',
      'Learn how to raise your rates without scaring your clients...',
      '',
      './assets/images/img1.jpg'),
  	 ];
  	}

  ngOnInit() {
  }

}
