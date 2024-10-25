import { Injectable } from '@nestjs/common';
import { GetHelloRes, GetWorldRes } from 'src/shared/generated-nestjs/example-service-1';
import { Empty } from 'src/shared/generated-nestjs/google/protobuf/empty';

@Injectable()
export class Example1Service {
  public getHello(request: Empty): GetHelloRes {
    return { hello: "Hello" };
  }

  public getWorld(request: Empty): GetWorldRes {
    return { world: "World" };
  }
}
