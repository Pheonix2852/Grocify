
<p align="center">
  <img src="assets/images/Readme.png" alt="Grocify App Hero" width="100%" />
</p>

# Grocify

![Version](https://img.shields.io/badge/version-1.0.0-208AEF)
![Expo SDK](https://img.shields.io/badge/expo-SDK%2055-1C1E24)
![React Native](https://img.shields.io/badge/react--native-0.83-61DAFB)

Grocify is a full-stack grocery planning app built with Expo, React Native, Expo Router, Clerk authentication, and a Neon Postgres database via Drizzle ORM.

It helps users plan grocery runs with item priority, quantity controls, completion tracking, and quick shopping insights.

## Table of Contents

- [What This Project Does](#what-this-project-does)
- [Why This Project Is Useful](#why-this-project-is-useful)
- [Tech Stack](#tech-stack)
- [How To Get Started](#how-to-get-started)
- [Usage Examples](#usage-examples)
- [Where To Get Help](#where-to-get-help)
- [Who Maintains And Contributes](#who-maintains-and-contributes)

## What This Project Does

Grocify provides:

- Social sign-in with Google, GitHub, and Apple (via Clerk)
- A tabbed mobile experience for Home, Planner, and Insights flows
- Item creation, quantity updates, purchased toggles, and item deletion
- Priority and category tracking across grocery items
- Clear-all completed item workflow
- In-app feedback and crash reporting integration (Sentry)

Core UI routes live under [src/app](src/app), and API handlers are defined in [src/app/api/items](src/app/api/items).

## Why This Project Is Useful

Grocify is useful as both a production-ready grocery tracker and a reference architecture for Expo apps that need:

- Authenticated mobile UX with Clerk + Expo Router
- Type-safe server data access using Drizzle + Neon Postgres
- File-based API route handlers alongside React Native screens
- Simple but scalable client state management using Zustand
- A modern React Native UI stack with NativeWind

## Tech Stack

- Expo SDK 55 + React Native 0.83 + React 19
- Expo Router (typed routes enabled)
- Clerk Expo SDK for auth
- Drizzle ORM + drizzle-kit
- Neon serverless Postgres
- Zustand state management
- NativeWind + Tailwind CSS
- Sentry for monitoring and feedback

## How To Get Started

### 1) Prerequisites

- Node.js 20+
- npm 10+
- Expo tooling for local device/emulator testing
- A Neon Postgres database
- A Clerk application (publishable key)
- Optional: Sentry DSN for monitoring

### 2) Install dependencies

```bash
npm install
```

### 3) Configure environment variables

Create a `.env` file in the repository root:

```bash
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxx
EXPO_PUBLIC_SENTRY_DSN=https://examplePublicKey@o0.ingest.sentry.io/0
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require
```

Notes:

- `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` is required to boot the app.
- `DATABASE_URL` is required for API routes, schema push, and seed scripts.
- `EXPO_PUBLIC_SENTRY_DSN` is recommended for error monitoring.

### 4) Push database schema

```bash
npm run db:push
```

### 5) Seed local data (optional)

```bash
npm run seed:grocery
```

### 6) Run the app

```bash
npm run start
```

Useful run commands:

```bash
npm run android
npm run ios
npm run web
```

## Usage Examples

### Add and manage grocery items in the app

1. Sign in with a social provider on the auth screen.
2. Open the Planner tab and add item name, category, quantity, and priority.
3. Open Home to update quantity, mark purchased, or delete items.
4. Open Insights to review stats and clear completed items.

### Interact with API routes directly during development

List items:

```bash
curl http://localhost:8081/api/items
```

Create an item:

```bash
curl -X POST http://localhost:8081/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Milk","category":"Dairy","quantity":2,"priority":"high"}'
```
