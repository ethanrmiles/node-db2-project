/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  await knex('cars').insert([
    {vin: '123456789', make: 'bmw', model: '320i', mileage: 318000, title: 'clean', transmission: 'manual' },
    {vin: '987654321', make: 'bmw', model: '330ci', mileage: 190000, title: 'clean', transmission: 'manual' },
    {vin: '246801357', make: 'bmw', model: '318is', mileage: 120000, title: 'salvage', transmission: 'manual' },
    {vin: '888888888', make: 'bmw', model: '330i', mileage: 13000, title: 'clean', transmission: 'automatic' }
  ]);
};
