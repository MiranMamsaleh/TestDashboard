import { modelForCards } from 'src/models/modelForCards';
import { compileNgModule } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-for-number-display',
  templateUrl: './card-for-number-display.component.html',
  styleUrls: ['./card-for-number-display.component.scss']
})
export class CardForNumberDisplayComponent implements OnInit {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  @Input() model: modelForCards;

  constructor() {
  }

  ngOnInit(): void {
  }
  

}
