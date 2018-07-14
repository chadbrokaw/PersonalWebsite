import { Component, OnInit } from '@angular/core';
import { EmitMyNameService } from '../services/emit-my-name/emit-my-name.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    compName: string = "Contact";

    constructor( private emitMyName: EmitMyNameService ) { }

    ngOnInit() {
      this.emitMyName.emitComponentName(this.compName);
    }
}
