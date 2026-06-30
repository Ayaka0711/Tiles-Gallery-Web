# TileVerse 

A simple tile gallery website. Built for a university assignment using **Next.js**, **Better Auth**, and **MongoDB**.

## What this project does

- Shows a home page with a banner and featured tiles
- Lets users browse all tiles and search them
- Lets users register and login (email/password or Google)
- Shows tile details only to logged-in users
- Lets users view and update their profile

## Tech Used

- **Next.js** (App Router) - the main framework
- **TypeScript** - for type safety
- **Tailwind CSS** - for some base styles
- **Better Auth** - handles login/signup/sessions
- **MongoDB** - stores user accounts
- **react-hot-toast** - shows popup messages

## How to Run This Project

### 1. Install packages
```bash
npm install
```

### 2. Set up MongoDB
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a free cluster
3. Click "Connect" and copy your connection string
4. It will look like: `mongodb+srv://username:password@cluster.mongodb.net/tileverse`

### 3. Set up Google Login (optional)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth credentials (Web application)
3. Add this redirect URL: `http://localhost:3000/api/auth/callback/google`
4. Copy your Client ID and Client Secret

### 4. Create your .env.local file
Copy `.env.local.example` to `.env.local` and fill in your real values:

```
MONGODB_URI=your-mongodb-connection-string
BETTER_AUTH_SECRET=any-long-random-text
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 5. Run the app
```bash
npm run dev
```

Open http://localhost:3000

## Pages

| Page | URL | Who can see it |
|------|-----|----------------|
| Home | `/` | Everyone |
| All Tiles | `/all-tiles` | Everyone |
| Login | `/login` | Everyone |
| Register | `/register` | Everyone |
| Tile Details | `/tile/1` | Logged in users only |
| My Profile | `/my-profile` | Logged in users only |
| Update Profile | `/update-profile` | Logged in users only |

## Project Structure

```
app/
  page.tsx              -> Home page
  layout.tsx            -> Wraps every page (navbar, footer)
  globals.css           -> All styles
  login/page.tsx        -> Login page
  register/page.tsx     -> Register page
  all-tiles/page.tsx    -> All tiles + search
  tile/[id]/page.tsx    -> Single tile details (private)
  my-profile/page.tsx   -> User profile (private)
  update-profile/page.tsx -> Edit profile (private)
  api/
    auth/[...all]/route.ts -> Better Auth API
    tiles/route.ts          -> Returns tile data

components/
  Navbar.tsx   -> Top navigation bar
  Footer.tsx   -> Bottom footer
  TileCard.tsx -> One tile card

context/
  AuthContext.tsx -> Shares login state with all pages

lib/
  auth.ts        -> Better Auth server setup
  auth-client.ts -> Better Auth client setup

data/
  tiles.json -> Sample tile data (8 tiles)
```
