import { Component, Input } from '@angular/core';
import { ShiftValueService } from '../shiftvalue.service';

@Component({
  selector: 'ciphertext',
  templateUrl: './ciphertext.component.html'
})
export class CiphertextComponent {

  ciphertext: string;
  @Input() cipherDisplayText: string = "";
  plainDisplayText: string = "";
  @Input() numeroShifter: number;
  shift: number;


  constructor(public service: ShiftValueService) {
              this.service.textoAcifrar.subscribe(
                (cipherDisplayText) => {
                  this.ciphertext=cipherDisplayText
                }
              );
              this.service.numeroShift.subscribe(
                (numeroShifter) => {
                  this.shift = numeroShifter
                }
              );
   }

  convertToPlaintext(newCiphertext) {
    this.plainDisplayText = newCiphertext;
    this.service.textoAdecifrar.emit(this.plainDisplayText);

  }

  getPlainDisplayText(evento) {

  }

  cifrando(text, shifter){
    
    let newString = [];

    shifter = shifter % 26;

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

}
