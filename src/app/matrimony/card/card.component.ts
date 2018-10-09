import { MatCard } from './../../models/matcard/mat.card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card:MatCard;
  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
