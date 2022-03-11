import { Component, Input, EventEmitter, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit()
  }
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  @Input()
  titulo: string = 'Basic'
  @Input()
  sifrao: string = '$'
  @Input()
  preco: string = '19,99'
  @Input()
  storage: string = '500Gb Storage'
  @Input()
  allowed: string = '2 users Allowed'
  @Input()
  gigas: string = 'Send up to 3 GB'
  @Input()
  matcard: string = 'card'
  @Input()
  mcs: string= 'value'
}
