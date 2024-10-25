import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { CONFIG_APP } from './config/config.export';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { EXAMPLE_RPC1_PACKAGE_NAME } from './shared/generated-nestjs/example-service-1';
import { EXAMPLE_RPC2_PACKAGE_NAME } from './shared/generated-nestjs/example-service-2';
import { EXAMPLE_RPC3_PACKAGE_NAME } from './shared/generated-nestjs/example-service-3';
import { join } from 'path';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: [
        EXAMPLE_RPC1_PACKAGE_NAME,
        EXAMPLE_RPC2_PACKAGE_NAME,
        EXAMPLE_RPC3_PACKAGE_NAME
      ],
      protoPath: join(CONFIG_APP.PROTO_PATH),
      url: CONFIG_APP.PROTO_URL,
    },
  });

  await app.listen();
}
bootstrap();
