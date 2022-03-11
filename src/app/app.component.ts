import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercicio4'; 
  
  alertar(e: any) {
    console.log('Pacote Comprado')
    console.log(e)
  }

  basic: string = '199.99'
  prof: string = '249.99'
  master: string = '379.99'

  printAlert(){
    if(this.basic == '199.99'){
      this.basic = '19.99'
    } else this.basic = '199.99'
    if(this.prof == '249.99'){
      this.prof = '24.99'
    } else this.prof = '249.99'
    if(this.master == '379.99'){
      this.master = '39.99'
    } else this.master = '379.99'
  }

  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar() {
    this._snackBar.open('PACOTE COMPRADO', 'Ok');
  }
  /*
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }
  */
}
