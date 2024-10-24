import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { CONFIG_APP } from './config/config.export';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(CONFIG_APP.PORT);
}
bootstrap();
