//--Angular---
import { Component, OnInit }  from '@angular/core';
import { animate, state,
  style, transition, trigger} from '@angular/animations';
import { Title }              from '@angular/platform-browser';

//--Services---
import { EmitMyNameService }  from '../services/emit-my-name/emit-my-name.service';


@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrls: ['./about-me-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.2s 2.2s ease-in-out')
      ])
    ]),
    trigger('h1FadeIn', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.4s .7s ease-in-out')
      ])
    ]),
    trigger('h3FadeIn', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('.4s 1.7s ease-in-out')
      ])
    ]),
    trigger('fadeInLate', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.4s 3.8s ease-in-out')
      ])
    ]),
  ]
})
export class AboutMePageComponent implements OnInit {

    /*With the exception of the animation series for the text (and the photo of me), this component is pretty simple.*/

    compName: string = 'AboutMe';
    photoNames = [
      './assets/Photos/Cooper.jpg',
      './assets/Photos/Headshot.JPG',
      './assets/Photos/BreneBrown.jpg',
      './assets/Photos/Personal1.JPG',
      './assets/Photos/Personal2.JPG',
      './assets/Photos/LaverneCox.JPG'
    ];
    photoNamesCounter: number = 0;

    constructor( private emitMyName: EmitMyNameService,
                 private titleService: Title ) { }

    ngOnInit() {
      this.emitMyName.emitComponentName( this.compName );
      this.titleService.setTitle( 'Chad Brokaw | About Me' );
    }

    public arrowClick( button: string ) {
        if ( button === 'forward') {
            if ( this.photoNamesCounter === 5 ) {
              this.photoNamesCounter = 0;
            }
            else {
              this.photoNamesCounter++;
            }
        }
        else {
          if ( this.photoNamesCounter === 0 ) {
            this.photoNamesCounter = 5;
          }
          else {
            this.photoNamesCounter--;
          }
        }
    }
}
