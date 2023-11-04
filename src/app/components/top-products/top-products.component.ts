import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss'],
})
export class TopProductsComponent implements OnInit {
  chart: any = [];
  chartOptions = {
    labels: ['Men', 'Electronics', 'Women'],
    data: [20, 30, 50],
    colors: ['#007bff', '#006fe6', '#0062cc'],
  };

  constructor() {}

  ngOnInit(): void {
    this.chart = new Chart('doughnut-chart', {
      type: 'doughnut',
      data: {
        labels: this.chartOptions.labels,
        datasets: [
          {
            label: '',
            data: this.chartOptions.data,
            borderWidth: 1,
            backgroundColor: this.chartOptions.colors,
          },
        ],
      },
    });
  }
}
