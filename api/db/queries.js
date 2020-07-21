const knex = require('./connection');

/**
 * USERS
 */
function getAllUsers() {
    return knex('users').select();
}

function getUser(id) {
    return knex('users').select().where('id', id);
}

/**
 * ITEMS
 */
function getAllItems() {
    return knex('items').select();
}

function getItem(id) {
    return knex('items').select().where('id', id);
}


module.exports = {
    getAllUsers,
    getUser,
    getAllItems,
    getItem
}