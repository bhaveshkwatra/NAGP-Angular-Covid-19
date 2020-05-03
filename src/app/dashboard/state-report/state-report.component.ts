import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggerService } from '../../core/services/logger.service';
import { HttpClient } from '@angular/common/http';
import { IStateReport } from '../../shared/interface/IStateReport';
import { StateDistrictService } from 'src/app/core/services/state-district.service';
import { AppConstants } from '../../core/constants/app-constants';

@Component({
  selector: 'app-state-report',
  templateUrl: './state-report.component.html',
  styleUrls: ['./state-report.component.css']
})
export class StateReportComponent implements OnInit {

  stateData : IStateReport[];
  displayedColumns: string[] = ['state', 'active', 'confirmed', 'deaths', 'recovered'];

  constructor(private loggingService : LoggerService, private httpService : HttpClient, private stateDistrict:StateDistrictService) { }

  ngOnInit(): void {
    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug('State Report Component is loading'!);
    }
    this.getStateData();
  }

  getStateData() : void {
     this.httpService.get(AppConstants.STATE_URL).subscribe(data=>{
      this.stateData = data["statewise"];
      this.stateData.push(this.stateData.splice(0,1)[0]);
    });
  }


  showDistrictData(data : IStateReport) :void {
    if(data && data['show'] == true) {
      data['show'] = false;
    } else {
      this.stateDistrict.getDataDistrictWise(data.state);
      data['show'] = true;
    }

  }
}
