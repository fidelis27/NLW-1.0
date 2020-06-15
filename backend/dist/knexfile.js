"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
module.exports = {
    development: {
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
};
