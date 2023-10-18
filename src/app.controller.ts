import * as newrelic from "newrelic";
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PaaService } from './paa/paa.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly paaService: PaaService,
  ) { }

  @Get()
  getHello(): string {
    newrelic.addCustomAttribute('some-attribute', 'some-value')
    return this.appService.getHello() + this.paaService.getPaa();
  }
}
