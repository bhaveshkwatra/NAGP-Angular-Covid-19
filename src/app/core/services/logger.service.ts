import { Injectable } from '@angular/core';
import { LoggingLevel } from '../enum/logging-level.enum';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private _level: LoggingLevel = LoggingLevel.VERBOSE;

  constructor() { }
 

  logError(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.ERRORS, optionalParams);
  }
  
  logWarning(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.WARNINGS, optionalParams);
  }
  
  logInfo(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.INFO, optionalParams);
  }

  logDebug(message: any, ...optionalParams: any[]) {
    this.log(message, LoggingLevel.VERBOSE, optionalParams);
  }

  isDebugEnable() : boolean {
    return this._level === LoggingLevel.VERBOSE;
  }

  isInfoEnable() : boolean {
    return this._level === LoggingLevel.INFO;
  }

  private log(message: any, level : LoggingLevel, ...optionalParams: any[]) {
    switch (level) {
      case LoggingLevel.ERRORS:
        console.error(message, optionalParams);
        break;
      case LoggingLevel.WARNINGS:
        console.warn(message, optionalParams);
        break;
      case LoggingLevel.INFO:
        console.info(message, optionalParams);
        break;
      default:
        console.debug(message, optionalParams);
    }
  } 
}
