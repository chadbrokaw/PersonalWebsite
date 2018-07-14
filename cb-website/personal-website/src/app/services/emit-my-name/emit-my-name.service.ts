import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitMyNameService {

    @Output() change: EventEmitter<string> = new EventEmitter();

    emitComponentName(componentName: string): void {
      this.change.emit(componentName);
    }

}
