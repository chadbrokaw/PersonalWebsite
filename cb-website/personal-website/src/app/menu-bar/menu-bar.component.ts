//--Angular---
import { Component, OnInit,
  HostListener }                from '@angular/core';
import { trigger, state, style,
  animate, transition, query,
  stagger }                     from '@angular/animations';
import { Router }               from '@angular/router';


@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  animations: [
    trigger('obscureScreen', [
      state('in', style( { opacity: 1 })),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('1.2s ease-in-out')
      ])
    ]),
    trigger('fadeIn', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('100ms', [
          animate('.5s .4s ease-out', style({ opacity: 1 }))
        ]),
        { optional: true }),

        query(':leave', stagger('100ms', [
          animate('.5s .2s ease-out', style({opacity: 0}))
        ]),
        { optional: true })
      ])
    ])
  ]
})
export class MenuBarComponent implements OnInit {

      screenWidth: any = undefined;
     screenHeight: any = undefined;
  smallScreen: boolean = false;
   displayMenu: string = 'menuClose';
          icon: string = "menu";
    iconMargin: number = undefined;
       icons: string[] = ["home","person","work","build","school","mail"];

  constructor( private router: Router ) { }

  ngOnInit() {
      this.screenWidth = window.innerWidth;
     this.screenHeight = window.innerHeight;
       this.iconMargin = this.screenHeight/7;
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
    if ( screenSize < 775 ) {
      this.smallScreen = true;
    }
    else {
      this.smallScreen = false;
    }
  }

  /*
   * Name: buttonClicked
   * Purpose: This function is called whenever the user clicks the FAB (only on the mobile version). This then causes all of
   *  the menu options to animate in above the FAB.
   * @PARAM: e [any] The click event
   * @RETURN: void
   * */
  public buttonClicked( e: any ): void {
    if ( this.icon === "menu" ) {
      this.displayMenu = 'menuOpen';
      this.icon = "close";
    }
    else {
      this.displayMenu = 'menuClose';
      this.icon = "menu";
    }
  }

  /*
   * Name: navButtonClicked
   * Purpose: This function handles the routing to the correct component when the user selects a menu option. This function only applies
   *  to the mobile version.
   * @PARAM: icon [string] The name of the icon, used to route to the correct component
   * @RETURN: void
  * */
  public navButtonClicked( icon: string ): void {
    if ( icon === "home") {
      this.displayMenu = 'menuClose';
      this.icon = "menu";
      this.router.navigate(['/Home']);
    }
    else if ( icon === "person") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/AboutMe']);
    }
    else if ( icon === "work") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Experience']);
    }
    else if ( icon === "build") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Skills']);
    }
    else if ( icon === "school") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Education']);
    }
    else if ( icon === "mail") {
        this.displayMenu = 'menuClose';
        this.icon = "menu";
        this.router.navigate(['/Contact']);
    }
  }
}
