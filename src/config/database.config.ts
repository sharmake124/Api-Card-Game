// src/config/database.config.ts

import { DataSourceOptions } from 'typeorm';
import 'dotenv/config';

export const databaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3000'),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root124',
  database: process.env.DB_NAME || 'apicardgame ',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
};
