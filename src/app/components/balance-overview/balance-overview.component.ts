import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss'],
})
export class BalanceOverviewComponent implements OnInit {
  chart: any = [];
  chartOptions = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    data: [60, 150, 90, 40, 30, 100, 50, 25, 75, 150, 50, 60]
  }

  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: this.chartOptions.labels,
        datasets: [
          {
            label: 'Income',
            data: this.chartOptions.data,
            borderWidth: 1,
            barThickness: 10,
            backgroundColor: '#007bff',
          },
        ],
      },
      
    });
  }
}
