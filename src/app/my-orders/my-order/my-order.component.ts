import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/common/web-contracts/Order';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {
    @Input() order: Order = '';
  constructor() { }

  ngOnInit(): void {
  }

}
