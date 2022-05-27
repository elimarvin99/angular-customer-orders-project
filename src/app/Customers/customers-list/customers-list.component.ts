//Angular
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
//me
import { ICustomer } from '../../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styles: ['../assets/styles'],
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];

  //this getse the customers and sets there value and triggers the calculate function that way we can track input into our dom
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }
  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
  //takes input from a parent componenet
  //@Input() customers: any[];

  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor(private sorterService: SorterService) {}

  ngOnInit() {}

  //looks for changes passed in from a parent component or the like and updates accordingly
  ngOnChanges(changes: SimpleChanges) {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
