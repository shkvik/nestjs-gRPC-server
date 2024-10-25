import { Module } from '@nestjs/common';
import { Example2Controller } from './example2.controller';
import { Example2Service } from './example2.service';

@Module({
  controllers: [Example2Controller],
  providers: [Example2Service],
})
export class Example2Module {}
