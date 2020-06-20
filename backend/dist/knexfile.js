Object.defineProperty(exports, '__esModule', { value: true });
const path_1 = require('path');
require('dotenv/config');

module.exports = {
  development: {
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
    // conexão local usando docker
    /* client: 'postgres',
        protocol: 'postgres',
        connection: {
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: 'Thiago',
          database: 'ecoleta',
        }, */
    migrations: {
      tableName: 'migrations',
      directory: path_1.resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path_1.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
  developmentSqlite: {
    client: 'sqlite3',
    connection: {
      filename: path_1.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      tableName: 'migrations',
      directory: path_1.resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path_1.resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },
  production: {
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
      directory: path_1.resolve(__dirname, 'src', 'database', 'migrations'),
      extension: 'ts',
    },
    seeds: {
      directory: path_1.resolve(__dirname, 'src', 'database', 'seeds'),
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
