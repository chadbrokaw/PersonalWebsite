import { Component, OnInit } from '@angular/core';
import {animate, state,
  style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeUp', [
      state('in', style( {
        opacity: 1,
        transform: "translateY(-150px)"
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: "translateY(0px)"
        }),
        animate('1s ease-out')
      ])
    ]),
    trigger('fadeDown', [
      state('in', style( {
        opacity: 1,
        transform: "translateY(150px)"
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: "translateY(0px)"
        }),
        animate('1s ease-out')
      ])
    ]),
  ]
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
