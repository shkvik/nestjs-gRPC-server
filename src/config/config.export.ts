import { ConfigApp } from "./config.schema";
import { validateEnv } from "./config.validate";

export const CONFIG_APP = validateEnv(ConfigApp);