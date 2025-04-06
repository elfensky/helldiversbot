# Helldivers Bot

This is an application that consumes the official Helldivers 1 API, caches and rebroadcasts it, shows various cool data visualizations and also creates notifications for new in-game events.

It uses:

-   [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
    -   App Router for the frontend
    -   API Routes for the backend
-   [ESLint](https://eslint.org) for linting.
-   [Vitest](https://vitest.dev) for testing
-   [Prisma](https://prisma.io)
-   [PostHog](https://posthog.com) for analytics
<!-- -   [Docker](https://www.docker.com) for deployment -->

## Getting Started

Create an .env file in the root directory and add a POSTGRES_URL variable with the connection string to your PostgreSQL database.

```sh
# 1. install dependencies
npm i

# 2.
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## TO UPDATE/REMOVE LATER

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```
