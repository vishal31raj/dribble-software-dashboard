import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.scss']
})
export class TopCardsComponent implements OnInit {
  @Input() topCardsData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
