import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public timer: number = 0;
  public stopMarker: boolean = false;
  startStopCheck: boolean = true;
  public minutes: string = '00';
  public seconds: string = '00';
  public miliSeconds: string ='00';
  constructor() { }

  ngOnInit() {
  }
  startTimer() {
    this.startStopCheck = false;
    this.stopMarker = false;
    this.counterAdd();
  }
  counterAdd() {
    setTimeout(() => {
      if (!this.stopMarker) {
        this.timer++;
       const minutes = Math.trunc(this.timer /60);
       const seconds = this.timer - minutes*60;
       this.minutes =('0'+ minutes).substr(-2);
       this.seconds =('0'+ seconds).substr(-2); 
        this.counterCheck();
      }
    }, 1000);
  }
  counterCheck() {
    if (this.timer < 36000) {
      this.counterAdd();
    }

  }
  stopCounter() {
    this.startStopCheck = true;
    this.stopMarker = true;
  }
  restartCounter() {
    this.timer = 0;
    this.minutes  = '00';
    this.seconds  = '00';
  }
}