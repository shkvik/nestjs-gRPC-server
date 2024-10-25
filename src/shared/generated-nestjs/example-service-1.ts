// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.5
//   protoc               v5.28.3
// source: example-service-1.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "exampleRpc1";

export interface GetHelloRes {
  hello?: string | undefined;
}

export interface GetWorldRes {
  world?: string | undefined;
}

export const EXAMPLE_RPC1_PACKAGE_NAME = "exampleRpc1";

export interface ExampleRpc1Client {
  getHello(request: Empty): Observable<GetHelloRes>;

  getWorld(request: Empty): Observable<GetWorldRes>;
}

export interface ExampleRpc1Controller {
  getHello(request: Empty): Promise<GetHelloRes> | Observable<GetHelloRes> | GetHelloRes;

  getWorld(request: Empty): Promise<GetWorldRes> | Observable<GetWorldRes> | GetWorldRes;
}

export function ExampleRpc1ControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getHello", "getWorld"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ExampleRpc1", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ExampleRpc1", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const EXAMPLE_RPC1_SERVICE_NAME = "ExampleRpc1";
