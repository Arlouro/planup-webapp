import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
