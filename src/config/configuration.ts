
const isProduction = process.env.NODE_ENV === "production";

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      url: isProduction ? process.env.DATABASE_URL
        : `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASS}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`
    },
  }
);
 