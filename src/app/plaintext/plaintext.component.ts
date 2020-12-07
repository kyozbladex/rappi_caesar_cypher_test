import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShiftValueService } from '../shiftvalue.service';

@Component({
  selector: 'plaintext',
  templateUrl: './plaintext.component.html'
})
export class PlaintextComponent {

  plaintext: string;
  @Input() plainDisplayText: string = "";
  cipherDisplayText: string = "";


  constructor(public service: ShiftValueService) { 
              this.service.textoAdecifrar.subscribe(
                (plainDisplayText) => {
                  this.plaintext=plainDisplayText
                }
              );
  }

  convertToCiphertext(newPlaintext) {

    this.cipherDisplayText = newPlaintext;
    this.service.textoAcifrar.emit(this.cipherDisplayText);
   

  }

  getCipherDisplayText() {
  }


  verificarTexto(texto){
    console.log(texto);
    var textoprueba = texto;
  }

}
