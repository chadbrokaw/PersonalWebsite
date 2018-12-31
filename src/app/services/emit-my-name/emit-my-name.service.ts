//--Angular---
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMyNameService {

    currentComponent: string = undefined;

    @Output() change: EventEmitter<string> = new EventEmitter();

    /*
     * Name: emitComponentName
     * Purpose: This function is used by other components to emit their 'name'. This allows other helper components to change their
     *  appearance accordingly, like the main menu component. This function also saves what the current component is.
     * @PARAM: componentName [string] The component currently being displayed
     * @RETURN: void
    */
    emitComponentName( componentName: string ): void {
      this.change.emit( componentName );
      this.currentComponent = componentName;
    }



    /**
     * Name: getComponentName
     * Type: public
     * @PARAM: none
     * @RETURN: [string] The current component name, as a string
     */
    getComponentName(): string {
      return this.currentComponent;
    }

}
