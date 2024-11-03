import { Controller } from '@nestjs/common';
import { Example3Service } from './example3.service';
import { Empty } from 'src/shared/generated-nestjs/google/protobuf/empty';
import { 
  ExampleRpc3Controller, 
  ExampleRpc3ControllerMethods, 
  GetHelloRes, 
  GetWorldRes 
} from 'src/shared/generated-nestjs/example-service-3';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
@ExampleRpc3ControllerMethods()
export class Example3Controller implements ExampleRpc3Controller {

  constructor(private readonly example3Service: Example3Service) {}
  
  @GrpcMethod()
  public async getHello(request: Empty): Promise<GetHelloRes> {
    return this.example3Service.getHello(request);
  }

  @GrpcMethod()
  public async getWorld(request: Empty): Promise<GetWorldRes> {
    return this.example3Service.getWorld(request);
  }
}
