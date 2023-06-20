export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      // url: process.env.DATABASE_URL,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      db: process.env.POSTGRES_DATABASE,
    },
  }
);