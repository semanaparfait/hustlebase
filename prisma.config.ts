import { defineConfig } from '@prisma/config';
import * as dotenv from 'dotenv';

// Manually load the .env file
dotenv.config();

export default defineConfig({
  datasource: {
    // Now process.env.DATABASE_URL will definitely have a value
    url: process.env.DATABASE_URL,
  },
});