// This file connects our app to MongoDB and sets up login methods.
// We use the "better-auth" package to handle all login logic for us.

import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// connect to our database using the link from .env.local
const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db();

// create the auth object - this handles signup, login, sessions, etc.
export const auth = betterAuth({
  database: mongodbAdapter(db),

  secret: process.env.BETTER_AUTH_SECRET as string,
  baseURL: process.env.BETTER_AUTH_URL as string,

  // allow login with email + password
  emailAndPassword: {
    enabled: true,
  },

  // allow login with Google
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
