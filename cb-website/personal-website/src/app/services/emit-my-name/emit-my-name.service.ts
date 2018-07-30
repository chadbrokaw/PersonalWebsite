import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMyNameService {

    currentComponent: string = undefined
    @Output() change: EventEmitter<string> = new EventEmitter();

    emitComponentName(componentName: string): void {
      this.change.emit(componentName);
      this.currentComponent = componentName;
    }

    getComponentName(): string {
      return this.currentComponent;
    }

}
