import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-precautions',
  templateUrl: './precautions.component.html',
  styleUrls: ['./precautions.component.css']
})
export class PrecautionsComponent implements OnInit {

  constructor(private loggingService : LoggerService) { }

  ngOnInit(): void {
    this.loggingService.logInfo('Precautions Tab is loading');
  }

}
