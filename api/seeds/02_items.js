exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('items').del()
      .then(function () {
        // Inserts seed entries
        return knex('items').insert([
          {
              item_id: '1',
              name: 'User 1, Item 1',
              description: 'Item 1 description...',
              user_id: 1,
          },
          {
              item_id: '2',
              name: 'User 1, Item 2',
              description: 'Item 2 description...',
              user_id: 1,
          },
          {
              item_id: '3',
              name: 'User 2, Item 1',
              description: 'Item 1 description...',
              user_id: 2,
          },
          {
              item_id: '4',
              name: 'User 2, Item 2',
              description: 'Item 2 description...',
              user_id: 2,
          },
          {
              item_id: '5',
              name: 'User 3, Item 1',
              description: 'Item 1 description...',
              user_id: 3,
          },
          {
              item_id: '6',
              name: 'User 3, Item 2',
              description: 'Item 2 description...',
              user_id: 3,
          }
        ]);
      });
  };
  