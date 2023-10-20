import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  {
    path: 'display',
    component: DisplayComponent,
  },
  {
    path: '',
    component: ControlPanelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
