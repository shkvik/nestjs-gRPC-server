import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ConfigApp {

  @IsString()
  @IsNotEmpty()
  NODE_ENV: string;

  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  HOST: string;

  @IsString()
  @IsNotEmpty()
  PROTO_PATH: string;

  @IsString()
  @IsNotEmpty()
  PROTO_URL: string;
}