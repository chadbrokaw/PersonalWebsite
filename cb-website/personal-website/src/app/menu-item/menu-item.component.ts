import { Component, OnInit, Input } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';
import { Router } from '@angular/router'

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


    constructor( private emitMyName: EmitMyNameService, private router: Router ) {

    }

    ngOnInit() {
      debugger;
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

    determineSelected() {
      this.emitMyName.change.subscribe(name => {
        this.selectedIcon(name);
      });
      this.selectedIcon(this.emitMyName.getComponentName());
    }

    selectedIcon(selectedName) {
      if(selectedName === this.name) {
        this.imgSelectedBool = true;
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSelectedBool = false;
        this.imgSrc = this.imgSrcNormal;
      }
      console.log("here");
    }

    hover(e) {
      this.imgFocusBool = true;
      this.imgSrc = this.imgSrcHover;
    }

    noHover(e) {
      this.imgFocusBool = false;
      if(this.imgSelectedBool) {
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSrc = this.imgSrcNormal;
      }
    }
}
