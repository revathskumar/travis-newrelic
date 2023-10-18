import { Module } from '@nestjs/common';
import { PaaService } from './paa.service';

@Module({
  providers: [PaaService],
  exports: [PaaService]
})
export class PaaModule { }
