exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.integer('quota_allocation').notNullable();
      table.integer('current_usage').notNullable().defaultTo(0);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };