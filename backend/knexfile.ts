import { resolve } from 'path';

module.exports = {
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
