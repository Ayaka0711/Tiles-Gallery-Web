// This file connects better-auth to Next.js.
// It automatically handles routes like:
// /api/auth/sign-in, /api/auth/sign-up, /api/auth/sign-out, /api/auth/session

import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
