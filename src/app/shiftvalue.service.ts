import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ShiftValueService {
  private shiftSource = new BehaviorSubject<string>("");
  currentShiftValue = this.shiftSource.asObservable();
 

  textoAcifrar = new EventEmitter<string>();
  textoAdecifrar = new EventEmitter<string>();
  numeroShift = new EventEmitter<number>();

  //textoCifrar: string;

  constructor() {
    
  }

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

  /* cifrando(textoAcifrar, numeroShift){
    console.log(textoAcifrar);
    
    let newString = [];

   // newString = text.split('');

   // console.log(newString);

   numeroShift = numeroShift % 26;

   // console.log(shifter);

    for (let i = 0; i < textoAcifrar.length; i++) {

      let charCode = textoAcifrar[i].charCodeAt();
      let newCharCode = 0;
      
      if (charCode >= 65 && charCode <= 90) {
        // Only then do a alphabet rotation
        newCharCode = charCode + numeroShift;
        if (newCharCode > 90) {
            newCharCode = (newCharCode - 90) + 64;
        }

    } else if (charCode >= 97 && charCode <= 122) {
        // Only then do a alphabet rotation
        newCharCode = charCode + numeroShift;
        if (newCharCode > 122) {
            newCharCode = (newCharCode - 122) + 96;
        }

    } else {
        newCharCode = charCode;
    }
  
    newString.push(String.fromCharCode(newCharCode));

    }

    return newString.join("").trim();

  } */

}
