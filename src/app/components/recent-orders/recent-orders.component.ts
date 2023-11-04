import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss'],
})
export class RecentOrdersComponent implements OnInit {
  @Input() recentOrdersData: any;
  selectedOrder: any;

  constructor() {}

  ngOnInit(): void {}

  onShowOrderDetails(orderId: string) {
    this.selectedOrder = this.recentOrdersData.find(
      (item: any) => item.id === orderId
    );
  }
}
