import { resolve } from 'path';
import 'dotenv/config';

module.exports = {
  developmentPostgres: {
    client: 'postgres',
    protocol: 'postgres',
    connection: {
      host: process.env.Host,
      port: process.env.DB_Port,
      user: process.env.User,
      password: process.env.Password,
      database: process.env.Database,
      ssl: { rejectUnauthorized: false },
    },

    migrations: {
      tableName: 'migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
  developmentSqlite: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      tableName: 'migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};

/* module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      tableName: 'migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
 */
