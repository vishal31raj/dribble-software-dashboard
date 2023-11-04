import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topCards: any;
  recentOrders: any;
  newUsers: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getApiData();
  }

  getApiData() {
    this.apiService.getDashboardData().subscribe((res: any) => {
      this.topCards = res.top_cards;
      this.recentOrders = res.recent_orders;
      this.newUsers = res.new_users;
    });
  }
}
