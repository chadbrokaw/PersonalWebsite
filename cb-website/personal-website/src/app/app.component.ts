import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {


  /*
   * Name: onActivate
   * Purpose: This function forces the window to scroll to the top whenever the route is reloaded.
   * @PARAM: event [router event]
   * @RETURN: void
   *  */
  onActivate( event ): void {
    window.scroll(0,0);
  }
}
