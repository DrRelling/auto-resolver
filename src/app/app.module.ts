import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DisplayComponent } from './components/display/display.component';
import { NgChartsModule } from 'ng2-charts';
import { BattleComponent } from './components/battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    DisplayComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
