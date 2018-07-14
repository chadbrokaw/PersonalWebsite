import { Component, OnInit, Input } from '@angular/core';
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
    imgSelected: boolean = false;

    constructor( private emitMyName: EmitMyNameService ) { }

    ngOnInit() {
      this.imgSrcNormal = "../assets/" + this.name + "-Normal.png";
      this.imgSrcHover = "../assets/" + this.name + "-Highlight.png";
      this.imgSrcSelect = "../assets/" + this.name + "-Select.png";
      this.imgClassName = this.name + "Icon";
      this.imgSrc = this.imgSrcNormal;

      this.emitMyName.change.subscribe(name => {
        this.selectedIcon(name);
      })
    }

    selectedIcon(selectedName) {
      if(selectedName === this.name) {
        this.imgSelected = true;
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSelected = false;
        this.imgSrc = this.imgSrcNormal;
      }
    }

    hover(e) {
      this.imgFocusBool = true;
      this.imgSrc = this.imgSrcHover;
    }

    noHover(e) {
      this.imgFocusBool = false;
      if(this.imgSelected) {
        this.imgSrc = this.imgSrcSelect;
      }
      else {
        this.imgSrc = this.imgSrcNormal;
      }
    }
}
