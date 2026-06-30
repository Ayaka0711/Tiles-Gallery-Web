// This file lets our React pages call login/signup/logout functions.
// It talks to the auth API routes in the background.

import { createAuthClient } from "better-auth/react";

// create the client
export const authClient = createAuthClient();

// these are the functions we will use in our pages
export const { signIn, signUp, signOut, useSession } = authClient;
