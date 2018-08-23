//--Angular---
import { Component, OnInit }  from '@angular/core';
import {animate, state,
  style, transition, trigger} from "@angular/animations";
import { Title }              from '@angular/platform-browser';

//--Services---
import { EmitMyNameService }  from '../services/emit-my-name/emit-my-name.service';


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

  /*This is the component the user first sees, it is just text, but this might change in the future...*/

  compName: string = "Home";

  constructor( private emitMyName: EmitMyNameService,
               private titleService: Title) { }

  ngOnInit() {
    this.emitMyName.emitComponentName( this.compName );
    this.titleService.setTitle('Chad Brokaw | Home');
  }

}
