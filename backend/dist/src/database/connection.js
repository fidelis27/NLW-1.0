"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var config = require('../../knexfile');
/* const connection = knex(config.developmentSqlite); */
var connection = knex_1.default(config.developmentPostgres);
exports.default = connection;
