exports.up = (knex) => {
    return knex.schema.createTable('items', (table) => {
      table.increments();
      table.string('item_id').notNullable().references('id').inTable('items').onDelete('CASCADE');
      table.string('name').notNullable();
      table.integer('description').notNullable().defaultTo(1);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('items');
  };
  