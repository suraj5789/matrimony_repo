import { MatCard, Address } from './../../models/matcard/mat.card.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public mList : MatCard[] = [];

  constructor() {
  }

  ngOnInit() { 
    let address = new Address();
    address.address = 'Killa Road, Mahal';
    address.city = 'Nagpur';
    address.state = 'Maharashtra';
    this.mList.push(new MatCard('Suraj', 'Gupta', 'Male','I am software engineer by profassion, looking for a girl to get married.', '/assets/images/suraj.jpg',35,null, address))
    this.mList.push(new MatCard('Anup', 'Gupta', 'Male','I am software engineer by profassion, looking for a girl to get married.', '/assets/images/suraj.jpg',35,null, address));
    this.mList.push(new MatCard('Anup', 'Gupta', 'Male','I am software engineer by profassion, looking for a girl to get married.', '/assets/images/suraj.jpg',35,null, address));
    this.mList.push(new MatCard('Anup', 'Gupta', 'Male','I am software engineer by profassion, looking for a girl to get married.', '/assets/images/suraj.jpg',35,null, address));
    this.mList.push(new MatCard('Anup', 'Gupta', 'Male','I am software engineer by profassion, looking for a girl to get married.', '/assets/images/suraj.jpg',35,null, address));
  }

}
