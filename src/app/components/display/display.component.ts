import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import Phaser from 'phaser';
import { interval } from 'rxjs';
import { phaserConfig } from 'src/app/config/phaser-config.config';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  public phaserGame?: Phaser.Game;
  
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  ngOnInit() {
    this.phaserGame = new Phaser.Game(phaserConfig);
    interval(2000).subscribe(() => {
      const data = this.lineChartData.datasets[0].data;
      this.lineChartData.datasets[0].data = data.map(() => Math.floor(Math.random() * 100))
    })
  }


}
