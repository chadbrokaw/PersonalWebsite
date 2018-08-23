//--Angular---
import { Component, OnInit }   from '@angular/core';
import { animate, query,
  stagger, state, style,
  transition, trigger }        from "@angular/animations";
import { Title }               from '@angular/platform-browser';

//--Services---
import { EmitMyNameService }   from '../services/emit-my-name/emit-my-name.service';



@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('web', style({transform: 'translateY(30)'})),
      transition('void => web', [
        query('.item', style({
          opacity: 0,
          transform: 'translateY(30%)'
        }), { optional: true }),

        query('.item',
          stagger('100ms', [
          animate('.3s .4s ease-out', style({
            opacity: 1,
            transform: 'translateY(-25%)'
          })),
            animate('.3s ease-out', style({
              opacity: 1,
              transform: 'translateY(0%)'
            }))
          ]),
          { optional: true })
      ])
    ])
  ]
})
export class ContactPageComponent implements OnInit {
  
    /*This is a pretty simple component. It only displays contact buttons, but the buttons are quite pretty if I do say so myself...*/

       compName: string = "Contact";
    screenState: string = 'web';

    constructor( private emitMyName: EmitMyNameService,
                 private titleService: Title ) { }


    ngOnInit() {
      this.emitMyName.emitComponentName( this.compName );
      this.titleService.setTitle( 'Chad Brokaw | Contact' );
    }
}
