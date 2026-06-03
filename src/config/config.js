import 'dotenv/config';

if(!process.env.PORT) {
  throw new Error("PORT is not defined in environment variables");
  process.exit(1);
}

if(!process.env.DB_URI) {
  throw new Error("DB_URI is not defined in environment variables");
  process.exit(1);
}

if(!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
  process.exit(1);
}

if(!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("IMAGEKIT_PRIVATE_KEY is not defined in environment variables");
  process.exit(1);
}

const config = {
    PORT: process.env.PORT,
    MONGOURI: process.env.DB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY
};

export default config;