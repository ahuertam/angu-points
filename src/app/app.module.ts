import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ProgressBarComponent } from './body/progress-bar/progress-bar.component';
import { TimerComponent } from './body/timer/timer.component';
import { PointCounterComponent } from './body/point-counter/point-counter.component';
import { DiceLaunchComponent } from './body/dice-launch/dice-launch.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,MatMenuModule,MatIconModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, BodyComponent, ProgressBarComponent, TimerComponent, PointCounterComponent, DiceLaunchComponent ],
  bootstrap:    [ AppComponent ],
  exports: [ 
    MatIconModule,
    MatMenuModule,
    ],
})
export class AppModule { }
