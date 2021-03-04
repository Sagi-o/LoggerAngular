import { NgModule, ErrorHandler } from '@angular/core';
import { LoggerService } from './logger.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './custom-http.interceptor';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [],
  providers: [
    { provide: ErrorHandler, useClass: LoggerService },
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
})
export class LoggerModule { }
