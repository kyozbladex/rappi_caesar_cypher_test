import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShiftValueService } from '../shiftvalue.service';

@Component({
  selector: 'ciphertext',
  templateUrl: './ciphertext.component.html'
})
export class CiphertextComponent {

  //ciphertext: string;
  @Input() cipherDisplayText: string = "";
  plainDisplayText: string = "";

  @Input() numeroShifter: number;
  shift: number;

  //cifradito: string;


  constructor(public service: ShiftValueService) {
              this.service.textoAcifrar.subscribe(
                (cipher) => {
                  this.cipherDisplayText=cipher
                }
              );
              this.service.numeroShift.subscribe(
                (numeroShifter) => {
                  this.shift = numeroShifter
                }
              );

              //this.cifradito = this.service.cifrando(this.ciphertext, this.numeroShifter);

   }

  convertToPlaintext(newCiphertext) {
    this.plainDisplayText = newCiphertext;
    this.service.textoAdecifrar.emit(this.plainDisplayText);

  }

  getPlainDisplayText(text, shifter) {

      let newString = [];

   // newString = text.split('');

   // console.log(newString);

    shifter = shifter % 26;

   // console.log(shifter);

    for (let i = 0; i < text.length; i++) {

      let charCode = text[i].charCodeAt();
      let newCharCode = 0;
      
      if (charCode >= 65 && charCode <= 90) {
        // Only then do a alphabet rotation
        newCharCode = charCode + shifter;
        if (newCharCode > 90) {
            newCharCode = (newCharCode - 90) + 64;
        }

    } else if (charCode >= 97 && charCode <= 122) {
        // Only then do a alphabet rotation
        newCharCode = charCode + shifter;
        if (newCharCode > 122) {
            newCharCode = (newCharCode - 122) + 96;
        }

    } else {
        newCharCode = charCode;
    }
  
    newString.push(String.fromCharCode(newCharCode));

    }

    return newString.join("").trim();

  }

 /*  cifrando(text, shifter){
    
    let newString = [];

   // newString = text.split('');

   // console.log(newString);

    shifter = shifter % 26;

   // console.log(shifter);

    for (let i = 0; i < text.length; i++) {

      let charCode = text[i].charCodeAt();
      let newCharCode = 0;
      
      if (charCode >= 65 && charCode <= 90) {
        // Only then do a alphabet rotation
        newCharCode = charCode + shifter;
        if (newCharCode > 90) {
            newCharCode = (newCharCode - 90) + 64;
        }

    } else if (charCode >= 97 && charCode <= 122) {
        // Only then do a alphabet rotation
        newCharCode = charCode + shifter;
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
