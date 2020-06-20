import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('files', table => {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.string('name').notNullable();
    table.binary('data').notNullable();
    table.integer('point_id').references('id').inTable('points').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('files');
}
