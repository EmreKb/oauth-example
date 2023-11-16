import { config } from 'dotenv';
import { cleanEnv, str } from 'envalid';

config();

export const ENV = cleanEnv(process.env, {
  JWT_ACCESS_SECRET: str(),
  JWT_ACCESS_EXP: str(),
  GITHUB_CLIENT_ID: str(),
  GITHUB_CLIENT_SECRET: str(),
});
