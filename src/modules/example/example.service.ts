import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  public getHello(): string {
    return 'Hello World!';
  }
}
