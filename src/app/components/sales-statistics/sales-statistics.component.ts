import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-sales-statistics',
  templateUrl: './sales-statistics.component.html',
  styleUrls: ['./sales-statistics.component.scss'],
})
export class SalesStatisticsComponent implements OnInit {
  chart: any = [];
  chartOptions = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    data: [5, 15, 10, 28, 25, 30, 40],
  }

  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.chartOptions.labels,
        datasets: [
          {
            label: '',
            data: this.chartOptions.data,
            fill: false,
            borderColor: '#007bff',
            borderWidth: 3,
          },
        ],
      },
    });
  }
}
