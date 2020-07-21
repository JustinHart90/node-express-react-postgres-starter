/* eslint-disable camelcase */
exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable('users', {
        id: 'id',
        email: {
            type: 'varchar(255)',
            notNull: true
        },
        password: {
            type: 'varchar(72)',
            notNull: true
        },
        firstName: {
            type: 'varchar(255)',
            notNull: true
        },
        lastName: {
            type: 'varchar(255)',
            notNull: true
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }
    });

    pgm.createTable('items', {
        id: 'id',
        userId: {
            type: 'integer',
            notNull: true,
            references: '"users"',
            onDelete: 'cascade'
        },
        name: {
            type: 'varchar(50)',
            notNull: true
        },
        description: {
            type: 'varchar(1000)',
            notNull: true
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp')
        }
    });

    pgm.createIndex('items', 'userId');
}

exports.down = pgm => {
    pgm.dropTable('users');
    pgm.dropTable('items');
};
