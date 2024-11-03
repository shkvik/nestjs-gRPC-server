import { Controller } from '@nestjs/common';
import { Empty } from 'src/shared/generated-nestjs/google/protobuf/empty';
import { 
  ExampleRpc2Controller, 
  ExampleRpc2ControllerMethods, 
  GetHelloRes, 
  GetWorldRes
} from 'src/shared/generated-nestjs/example-service-2';
import { Example2Service } from './example2.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
@ExampleRpc2ControllerMethods()
export class Example2Controller implements ExampleRpc2Controller {

  constructor(private readonly example2Service: Example2Service) {}
  
  @GrpcMethod()
  public async getHello(request: Empty): Promise<GetHelloRes> {
    return this.example2Service.getHello(request);
  }
  
  @GrpcMethod()
  public async getWorld(request: Empty): Promise<GetWorldRes> {
    return this.example2Service.getWorld(request);
  }
}
