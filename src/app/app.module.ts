import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { NewUsersComponent } from './components/new-users/new-users.component';
import { SalesStatisticsComponent } from './components/sales-statistics/sales-statistics.component';
import { BalanceOverviewComponent } from './components/balance-overview/balance-overview.component';
import { TopProductsComponent } from './components/top-products/top-products.component';
import { TopCardsComponent } from './components/top-cards/top-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RecentOrdersComponent,
    NewUsersComponent,
    SalesStatisticsComponent,
    BalanceOverviewComponent,
    TopProductsComponent,
    TopCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
