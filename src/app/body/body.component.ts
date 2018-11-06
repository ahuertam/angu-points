import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  diceNumber: any;
  diceResult: any;
  coinResult: any;
  dice: boolean = false;
  coin: boolean = false;
  constructor() { }

  ngOnInit() {
    this.diceNumber = 1;
  }
  rollDice(cantidadDados, caras) {
    let out = '';
    for (let i = 0; i < cantidadDados; i++) {
      out += (Math.floor(Math.random() * caras) + 1);
    }
    return out;
  }
  throwCoin(numberCoins) {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
  }
throwACoin() {
  this.dice = false;
  this.coinResult = this.throwCoin(1);
  this.coin = true;
}
  roll1d6(cantidadDados) {
    this.coin = false;
    this.diceResult = this.rollDice(cantidadDados, 6);
    this.dice = true;
  }

  diceCheck(){
    return this.diceResult;
  }
}