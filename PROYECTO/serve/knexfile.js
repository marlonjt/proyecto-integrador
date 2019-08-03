module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '1234',
            database: 'asignacion',
            charset: 'utf8'
        },
        migrations: {
            //Crea una migración en la ubicacion indicada (/db/migrations)
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            //Crea una semilla en la ubicacion indicada (/db/seeds)
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
}