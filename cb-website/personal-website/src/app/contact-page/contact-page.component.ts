import {Component, HostListener, OnInit} from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";


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
      ]),
      transition('void => mobile', [
        query('.item', style({
          opacity: 0,
          transform: 'scale(.5, .5)'
        }), { optional: true }),
        query('.item',
          stagger('100ms', [
            animate('.3s .4s ease-out', style( {
              opacity: 1,
              transform: 'scale(1.3,1.3)'
            })),
            animate('.3s ease-out', style({
              opacity: 1,
              transform:  'scale(1,1)'
            }))
          ]), { optional: true })
      ])
    ])
  ]
})
export class ContactPageComponent implements OnInit {

    compName: string = "Contact";
    screenState: string = 'web';
    screenWidth: number = undefined;

    constructor( private emitMyName: EmitMyNameService ) { }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.screenWidth = window.innerWidth;
      this.handleScreenSize(this.screenWidth);
    }

    handleScreenSize(width: number): void {
      if ( width < 880) {
        this.screenState = "mobile";
      }
      else {
        this.screenState = "web";
      }
    }

    ngOnInit() {
      this.emitMyName.emitComponentName(this.compName);
    }
}
