exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', function(table){
    table.increments();
    table.string('title');
    table.string('genre');
    table.string('plot');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
