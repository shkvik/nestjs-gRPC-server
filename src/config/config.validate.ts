import { plainToInstance } from "class-transformer";
import { validateSync } from "class-validator";


export function validateEnv<T extends object>(config: new (...args: any[]) => T): T {
  const validatedConfig = plainToInstance(config, process.env, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}