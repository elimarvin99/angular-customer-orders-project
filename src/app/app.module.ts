import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { CustomersModule } from './Customers/customers.module';
import { SharedModule } from '../shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CustomersModule,
    SharedModule,
    AppRoutingModule,
    OrdersModule,
  ],
  declarations: [AppComponent],
  // the startup componenet
  bootstrap: [AppComponent],
})
export class AppModule {}
