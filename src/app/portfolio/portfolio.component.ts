import {Component, HostListener, OnInit} from '@angular/core';
import {animate, state,
  style, transition, trigger} from "@angular/animations";
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import { Title }                from '@angular/platform-browser';

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
      trigger('fadeDownSmall', [
          state('in', style( {
              opacity: 1,
              transform: "translateY(50px)"
          })),
          transition('void => *', [
              style({
                  opacity: 0,
                  transform: "translateY(0px)"
              }),
              animate('1s ease-out')
          ])
      ]),
      trigger('fadeDownBig', [
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
    compName: string = 'Experience';
    screenWidth: any = undefined;
    screenHeight: any = undefined;
    smallScreen: boolean = false;

    constructor( private emitMyName: EmitMyNameService, private titleService: Title) { }

    ngOnInit() {
        this.emitMyName.emitComponentName( this.compName );
        this.titleService.setTitle('Chad Brokaw | Be Involved');
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.handleScreenSize(this.screenWidth);
    }

    /*
     * Name: @HostListener
     * Purpose: This listener calls the handleScreenSize function whenever the user changes the current window size. It also saves
     *  the current width of the screen.
     * @PARAM: none
     * @RETURN: void
     *  */
    @HostListener( 'window:resize', ['$event'] )
    onResize( event ): void {
        this.screenWidth = window.innerWidth;
        this.handleScreenSize( this.screenWidth );
    }

    /*
     * Name: handleScreenSize
     * Purpose: This function handles what happens when the user changes the size of the screen. When the screenSize drops below 775px
     *  the function switches the smallScreen boolean to true. This then causes the non-mobile menu to be removed from the DOM and replaced
     *  with a FAB.
     * @PARAM: screenSize [any] The current size of the window
     * @RETURN: void
     *
    * */
    private handleScreenSize( screenSize: any ): void {
        if ( screenSize < 1100 ) {
            this.smallScreen = true;
        }
        else {
            this.smallScreen = false;
        }
    }

}
