import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaaModule } from './paa/paa.module';
import { PaaService } from './paa/paa.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PaaService],
})
export class AppModule { }
