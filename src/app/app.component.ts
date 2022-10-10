import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    dadoIzquierdo: String = '../assets/img/dice1.png';
    dadoDerecho: String = '../assets/img/dice4.png';

    num1: number = 1;
    num2: number = 4;

    tirarDados(): void {
        this.num1 = Math.round( Math.random() * 5 ) + 1 ;
        this.dadoIzquierdo = "../assets/img/dice" + this.num1 +".png";
        this.num2 = Math.round( Math.random() * 5 ) +1 ;
        this.dadoDerecho = "../assets/img/dice" + this.num2 +".png";
    }
}
