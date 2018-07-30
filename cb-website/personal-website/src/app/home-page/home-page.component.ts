import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({
          transform: 'translateY(50%)',
          opacity: 0
        }),
        animate('.4s 1.3s ease-in-out')
      ])
    ]),
    trigger('fadeIn', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.2s ease-in-out')
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  compName: string = "Home";

  constructor( private emitMyName: EmitMyNameService ) { }

  ngOnInit() {
    this.emitMyName.emitComponentName(this.compName);
  }

}
