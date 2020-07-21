// Update with your config settings.
require('dotenv').config({silent:true});

module.exports = {
  development: {
   client: 'postgres',
    connection: async () => {
        return {
            host : process.env.DATABASE_HOST,
            user : process.env.DATABASE_USER,
            password : process.env.USER_PASSWORD,
            database : process.env.DATABASE_NAME
        };
    }
 },
 production: {
    client: 'postgres',
    connection: async () => {
        return {
            host : process.env.DATABASE_HOST,
            user : process.env.DATABASE_USER,
            password : process.env.USER_PASSWORD,
            database : process.env.DATABASE_NAME
        };
    }
 }
};
