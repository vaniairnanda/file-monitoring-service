exports.up = function(knex) {
    return knex.schema.createTable('uploaded_files', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users');
      table.text('filename').notNullable();
      table.text('url').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('uploaded_files');
  };