import { Credential, Credentials } from '../interface';

const credential: Credential = {
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.PGDATABASE || '',
  dialect: 'postgres',
  options: {
    host: process.env.PGHOST || '',
    dialect: 'postgres',
  },
};

const config: Credentials = {
  development: credential,
  test: credential,
  production: credential,
};
export default config;
