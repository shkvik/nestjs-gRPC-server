import { Module } from '@nestjs/common';
import { Example1Controller } from './example1.controller';
import { Example1Service } from './example1.service';

@Module({
  controllers: [Example1Controller],
  providers: [Example1Service],
})
export class Example1Module {}
