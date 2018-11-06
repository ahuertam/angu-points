import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-point-counter',
  templateUrl: './point-counter.component.html',
  styleUrls: ['./point-counter.component.css']
})
export class PointCounterComponent implements OnInit {
  @Input() init: number = null;
  public counter: number = 20;
  lifeProgress: number = 0;
  totalLife: number = 20;
  constructor() { }
  ngOnInit() {
    this.lifeProgress = (this.counter) / this.totalLife * 100;
  }
  restLife() {
    if (this.counter > 0) {
      this.counter--;
    }
    if (this.counter < this.totalLife) {
      this.lifeProgress = (this.counter) / this.totalLife * 100;
    }
  }
  addLife() {
    if (this.counter < this.totalLife) {
      this.lifeProgress = (this.counter+1) / this.totalLife * 100;
    }
    this.counter++;
  }
}