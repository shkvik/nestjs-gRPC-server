import { Module } from '@nestjs/common';
import { Example1Module } from '../example1/example1.module';
import { Example2Module } from '../example2/example2.module';
import { Example3Module } from '../example3/example3.module';

@Module({
  imports: [
    Example1Module,
    Example2Module,
    Example3Module
  ],
})
export class AppModule {}
