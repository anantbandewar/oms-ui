import { Component, OnInit } from '@angular/core';
import { Order } from 'src/common/web-contracts/Order';
import { OrderFilter } from 'src/common/web-contracts/OrderFilter';
import { MyOrdersService } from './my-orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

    orders: Array<Order> = [];

    constructor(private orderService: MyOrdersService) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.getOrders();
    }

    getOrders(): void {
        const filter = new OrderFilter();
        const obj: any = { filter };

        this.orderService.getOrders(obj).subscribe(response => {
            this.orders = (response.Result && response.Result.orders) ? response.Result.orders : [];
        });
    }

}
