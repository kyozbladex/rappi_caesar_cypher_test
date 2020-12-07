import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShiftValueService {
  private shiftSource = new BehaviorSubject<string>("");
  currentShiftValue = this.shiftSource.asObservable();
 

  textoAcifrar = new EventEmitter<string>();
  textoAdecifrar = new EventEmitter<string>();
  numeroShift = new EventEmitter<number>();

  constructor() {}

 // changeShiftValue(shift: string) {
  changeShiftValue(shift: number) {
   // var shift = '';
 // var shift = this.currentShiftValue

    return {
        getShift: function () {
            return shift;
        },
        setShift: function(value) {
          shift = value;
        }
    };
  }
}
