import 'dotenv/config';

if(!process.env.PORT) {
  throw new Error("PORT is not defined in environment variables");
}

if(!process.env.DB_URI) {
  throw new Error("DB_URI is not defined in environment variables");
}

if(!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

if(!process.env.IMAGEKIT_PRIVATE_KEY) {
  throw new Error("IMAGEKIT_PRIVATE_KEY is not defined in environment variables");
}

if(!process.env.CLIENT_URL) {
  throw new Error("CLIENT_URL is not defined in environment variables");
}

const config = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    CLIENT_URL: process.env.CLIENT_URL
};

export default config;