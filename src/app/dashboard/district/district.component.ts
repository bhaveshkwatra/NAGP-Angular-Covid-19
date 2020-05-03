import { Component, OnInit } from '@angular/core';
import { StateDistrictService } from 'src/app/core/services/state-district.service';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  constructor(private stateDistrictService : StateDistrictService, private loggingService : LoggerService) { }

  districtData : any;

  ngOnInit(): void {
    this.loggingService.logInfo('District Component is loading');
    this.stateDistrictService.districtdata.subscribe(data => {
      let districtDataArray = [];
      Object.keys(data).forEach((key, index) => {
        districtDataArray.push(
          Object.assign({}, { stateName: key }, data[key])
        );
      });
      this.districtData = districtDataArray;
      this.loggingService.logInfo(`District Data after fetching from service ${this.districtData}`);
    });
  }

  

}
