# FireForms Prototype

Deployable Next.js prototype for fire department apparatus checks, repair requests, med bag checks, station repair requests, reports, admin checklist editing, and optional email notifications.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Optional email setup

Copy `.env.example` to `.env.local` and add:

```bash
RESEND_API_KEY=your_key
FIRE_FORMS_FROM="FireForms <onboarding@resend.dev>"
FIRE_FORMS_TO="recipient@example.com"
```

With no Resend API key, the app logs a mock email response and still saves the ticket locally.

## Deploy

Push to GitHub, import the repo into Vercel, add the environment variables above if using email, then deploy.

## Current limits

This prototype stores submissions in browser localStorage. For production, connect Supabase/Postgres and real authentication/roles.
