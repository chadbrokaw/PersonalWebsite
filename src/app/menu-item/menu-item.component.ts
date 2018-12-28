//--Angular---
import { Component, OnInit, Input } from '@angular/core';

//--Services---
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

       @Input() name: string;
              imgSrc: string = undefined;
        imgSrcNormal: string = undefined;
         imgSrcHover: string = undefined;
        imgSrcSelect: string = undefined;
        imgClassName: string = undefined;
       imgFocusBool: boolean = false;
    imgSelectedBool: boolean = false;


    constructor( private emitMyName: EmitMyNameService ) { }

    ngOnInit() {
      /*Build the various image sources.*/
      this.imgSrcNormal = "./assets/" + this.name + "-Normal.png";
       this.imgSrcHover = "./assets/" + this.name + "-Highlight.png";
      this.imgSrcSelect = "./assets/" + this.name + "-Select.png";
      this.imgClassName = this.name + "Icon";

      this.determineSelected();

      if ( this.imgSelectedBool ) {
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSrc = this.imgSrcNormal;
      }
    }


    /*
     * Name: determineSelected
     * Purpose: This function is used to determine what component is currently being displayed so we can change the color of the
     *  corresponding icon. It uses the emitMyNameService to subscribe to the name of the component.
     * @PARAM: none
     * @RETURN: void
     */
    determineSelected(): void {
      this.emitMyName.change.subscribe(name => {
        this.selectedIcon( name );
      });
      /*selectedIcon is called twice just in case the user resizes the screen, then sizes it back up.*/
      this.selectedIcon( this.emitMyName.getComponentName() );
    }

    /*
     * Name: selectedIcon
     * Purpose: This function is used to determine what color an icon should be (purple if the component is currently being viewed,
     *  black otherwise).
     * @PARAM: selectedName [string] The name of the currently selected component, which may or may not match this item's name
     * */
    selectedIcon( selectedName ): void {
      if ( selectedName === this.name ) {
        this.imgSelectedBool = true;
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSelectedBool = false;
        this.imgSrc = this.imgSrcNormal;
      }
    }

    /*
     * Name: hover
     * Purpose: This function is called whenever the user hovers over an icon, when this happens, the icon color changes to blue.
     * @PARAM: e [hover event]
     * @RETURN: void
     */
    hover( e: any ): void {
      this.imgFocusBool = true;
      this.imgSrc = this.imgSrcHover;
    }

    /*
     * Name: noHover
     * Purpose: This function is the converse of the hover function in that it handles what color the icon should be when the user stops
     *  hovering over it. The function must determine whether to change the icon back to the standard black version or, if the component is
     *  currently selected, to the selected purple version.
     *  */
    noHover( e: any ): void {
      this.imgFocusBool = false;

      if ( this.imgSelectedBool ) {
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSrc = this.imgSrcNormal;
      }
    }
}
