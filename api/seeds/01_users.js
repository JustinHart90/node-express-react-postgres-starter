exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          {
              id: '1',
              first_name: 'Justin',
              last_name: 'Hart',
              username: 'jhart',
              password: '123',
              is_admin: 'true'
          },
          {
              id: '2',
              first_name: 'Jane',
              last_name: 'Doe',
              username: 'jdoe',
              password: '123',
              is_admin: 'true'
          },
          {
              id: '3',
              first_name: 'Joben',
              last_name: 'Johnson',
              username: 'jjon',
              password: '123',
              is_admin: 'false'
          }
  
        ]);
  
      });
  };
  