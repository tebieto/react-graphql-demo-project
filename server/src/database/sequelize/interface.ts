import { Options } from 'sequelize/types';

export interface Credential {
  database: string;
  username: string;
  password: string;
  dialect: string;
  options: Options;
}

interface CredentialsBase {
  [key: string]: Credential;
}

export interface Credentials extends CredentialsBase {
  development: Credential;
  test: Credential;
  production: Credential;
}
