import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private loggingService : LoggerService) { }

  ngOnInit(): void {
    if (this.loggingService.isDebugEnable()) {
        this.loggingService.logDebug('Footer Component is loading');
    }
  }

}
