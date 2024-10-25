import { Module } from '@nestjs/common';
import { Example3Controller } from './example3.controller';
import { Example3Service } from './example3.service';

@Module({
  controllers: [Example3Controller],
  providers: [Example3Service],
})
export class Example3Module {}
