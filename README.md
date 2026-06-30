# Tiles Gallery 

A simple tile gallery website I built for my university web development assignment. It shows a collection of tiles, lets users search them, and has login/register functionality.

## Live Website

🔗 https://tiles-gallery-web-tau.vercel.app

## What This Project Does

- Shows a home page with a banner and some featured tiles
- Lets users browse all tiles and search by name or category
- Lets users register and login (with email/password or Google)
- Shows full tile details only to logged-in users
- Lets logged-in users see and update their profile

## Tech I Used

- **Next.js** (App Router) – the main framework for building the website
- **TypeScript** – for catching errors while coding
- **Tailwind CSS** – for some basic styling
- **Better Auth** – handles login, register, and sessions
- **MongoDB** – stores user accounts
- **react-hot-toast** – for showing popup messages like "Login successful!"

## npm Packages Used

```
better-auth   - authentication (login/signup with email & Google)
mongodb       - connects to my MongoDB database
react-hot-toast - shows toast/popup notifications
```

## How to Run This Project on Your Computer

### 1. Clone this repo

```bash
git clone https://github.com/Ayaka0711/Tiles-Gallery-Web.git
cd Tiles-Gallery-Web
```

### 2. Install the packages

```bash
npm install
```

### 3. Set up MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and make a free account
2. Create a free cluster
3. Go to **Database Access** and create a database user (username + password)
4. Go to **Network Access** and add `0.0.0.0/0` so it allows connections from anywhere
5. Click **Connect** → **Drivers** → copy the connection string

### 4. Set up Google Login (optional)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Go to **APIs & Services → Credentials** and create an **OAuth Client ID**
4. Add this redirect URL:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
5. Copy your **Client ID** and **Client Secret**

### 5. Create your `.env.local` file

Make a file called `.env.local` in the main folder and add this:

```env
MONGODB_URI=your-mongodb-connection-string
BETTER_AUTH_SECRET=any-long-random-text-here
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 6. Run it

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Pages in This App

| Page | URL | Who can visit |
|------|-----|----------------|
| Home | `/` | Everyone |
| All Tiles | `/all-tiles` | Everyone |
| Login | `/login` | Everyone |
| Register | `/register` | Everyone |
| Tile Details | `/tile/1` | Only logged-in users |
| My Profile | `/my-profile` | Only logged-in users |
| Update Profile | `/update-profile` | Only logged-in users |

## How My Folders Are Organized

```
app/
  page.tsx               -> the home page
  layout.tsx              -> wraps every page (navbar, footer, toast)
  globals.css              -> all my styles
  login/page.tsx           -> login page
  register/page.tsx        -> register page
  all-tiles/page.tsx       -> shows all tiles + search bar
  tile/[id]/page.tsx       -> shows one tile's details (private page)
  my-profile/page.tsx      -> shows my profile (private page)
  update-profile/page.tsx  -> form to edit my profile (private page)
  api/
    auth/[...all]/route.ts -> handles all login/signup requests
    tiles/route.ts          -> sends back the tile data

components/
  Navbar.tsx    -> the top navigation bar
  Footer.tsx    -> the bottom footer
  TileCard.tsx  -> one tile card (used in the gallery)

context/
  AuthContext.tsx  -> lets every page know if someone is logged in

lib/
  auth.ts         -> sets up Better Auth on the server (connects to MongoDB)
  auth-client.ts  -> sets up Better Auth on the browser (login/signup functions)

data/
  tiles.json -> all the tile information (title, price, image, etc.)
```

## What I Learned

While building this, I learned how to:
- Use Next.js App Router to make different pages and API routes
- Connect a website to MongoDB using Better Auth
- Make some pages private so only logged-in users can see them
- Use environment variables to keep secret keys safe
- Deploy a project to Vercel and connect it with Google login
- Fix errors like MongoDB network access issues and OAuth redirect URLs

## Notes

This project was made for a university assignment. It's a beginner-level project, so the code is kept simple with lots of comments explaining what each part does.
