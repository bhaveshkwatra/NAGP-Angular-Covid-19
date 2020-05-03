import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app-constants';
import { logging } from 'protractor';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StateDistrictService {

  state : any;
  district : any;
  districtdata: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private loggingService : LoggerService) { }

  getDataDistrictWise(state: any) {
    this.http.get(AppConstants.DISTRICT_WISE_URL).subscribe(data => {
      this.district = data[state].districtData
      if (this.loggingService.isDebugEnable()) {
          this.loggingService.logDebug(`District Data : ${this.district}`);
      }
      this.districtdata.next(this.district);
    })
    
  }

}
