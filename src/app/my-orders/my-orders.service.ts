import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from 'src/common/constants/url.constants';
import { HttpHelperService } from 'src/common/services-library/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

    urlConstants: UrlConstants = new UrlConstants();
    constructor(private httpHelperService: HttpHelperService) { }

    getOrders(obj: any): Observable<any> {
        return this.httpHelperService.post(this.urlConstants.getOrders, obj);
    }
}
