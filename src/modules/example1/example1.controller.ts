import { Controller } from '@nestjs/common';
import { Example1Service } from './example1.service';
import { 
  ExampleRpc1Controller, 
  ExampleRpc1ControllerMethods,
  GetHelloRes,
  GetWorldRes
} from 'src/shared/generated-nestjs/example-service-1';
import { Empty } from 'src/shared/generated-nestjs/google/protobuf/empty';

@Controller()
@ExampleRpc1ControllerMethods()
export class Example1Controller implements ExampleRpc1Controller {

  constructor(private readonly example1Service: Example1Service) {}
  
  public async getHello(request: Empty): Promise<GetHelloRes> {
    return this.example1Service.getHello(request);
  }

  public async getWorld(request: Empty): Promise<GetWorldRes> {
    return this.example1Service.getWorld(request);
  }
}
