import knex from 'knex';

const config = require('../../knexfile');

/* const connection = knex(config.developmentSqlite); */
const connection = knex(config.developmentPostgres);

export default connection;
