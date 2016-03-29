module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/angular-movie-app'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
