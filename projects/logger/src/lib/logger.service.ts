import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ErrorHandler {
  appName: string;

  constructor(private readonly injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {

    const timestamp = new Date().getTime();
    const message = error.message;
    let stackTrace;
    let logMessage;

    if (error instanceof Error) {
      stackTrace = error.stack;
    }

    if (error instanceof HttpErrorResponse) {
      logMessage = `Http error on application: ${this.appName}\nMessage: ${message}\nTimestamp: ${timestamp}`;
    } else {
      logMessage = `General error on application: ${this.appName}\nMessage: ${message}\nStack: ${stackTrace}\nTimestamp: ${timestamp}`;
    }
    console.log(logMessage);
    localStorage.setItem(`${this.appName}_error_${timestamp.toString()}`, logMessage);
  }
}
