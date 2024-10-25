import { Controller } from '@nestjs/common';
import { Example3Service } from './example3.service';
import { Empty } from 'src/shared/generated-nestjs/google/protobuf/empty';
import { 
  ExampleRpc3Controller, 
  ExampleRpc3ControllerMethods, 
  GetHelloRes, 
  GetWorldRes 
} from 'src/shared/generated-nestjs/example-service-3';

@Controller()
@ExampleRpc3ControllerMethods()
export class Example3Controller implements ExampleRpc3Controller {

  constructor(private readonly example3Service: Example3Service) {}
  
  public async getHello(request: Empty): Promise<GetHelloRes> {
    return this.example3Service.getHello(request);
  }

  public async getWorld(request: Empty): Promise<GetWorldRes> {
    return this.example3Service.getWorld(request);
  }
}
