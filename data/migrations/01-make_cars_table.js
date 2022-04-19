exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    /* id */ tbl.increments(); 
    /* vin */ tbl.text('vin').unique().notNullable()
    /* make */ tbl.text('make').notNullable()
    /* model */ tbl.text('model').notNullable()
    /* mileage */ tbl.numeric('mileage').notNullable()
    /* title */ tbl.text('title')
    /* transmission */ tbl.text('transmission').notNullable()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
