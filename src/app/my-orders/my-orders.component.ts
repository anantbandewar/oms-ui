import { Component, OnInit } from '@angular/core';
import { Order } from 'src/common/web-contracts/Order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

    orders: Array<Order> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
