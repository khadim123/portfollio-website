# Modern Next.js Portfolio

This is a production-ready, modern five-page portfolio app built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Pages**: Home, About, Portfolio (List & Detail), Services, Contact
- **Styling**: Dark mode, responsive design with a custom theme.
- **Performance**: Optimized for Lighthouse scores with best practices like ISR.
- **SEO & Accessibility**: Complete meta tags, JSON-LD schema, and accessible components.
- **Developer Experience**: Linting, formatting, environment variables, and a sitemap generation script.

## Getting Started

First, you'll need to set up your environment variables. Copy the `.env.example` file to a new file named `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```

Next, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Creates a production-ready build.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the project files.
- `npm run format`: Formats the code with Prettier.
- `npm run export-sitemap`: Generates a `sitemap.xml` file.

## Deployment

This app is designed for easy deployment on [Vercel](https://vercel.com/), the creators of Next.js. To deploy your portfolio:

1.  Push your code to a Git repository (e.g., GitHub, GitLab).
2.  Import your repository into Vercel.
3.  Vercel will automatically detect the Next.js framework and configure the build settings.
4.  Add your environment variables from `.env.local` to the Vercel project settings.
5.  Deploy!

## Contact Form API

The contact form API route at `/api/contact` currently simulates sending an email and logs the submission to the console. To send real emails, you'll need to integrate a third-party service like [SendGrid](https://sendgrid.com/) or [Resend](https://resend.com/). The API route file (`src/app/api/contact/route.ts`) includes commented-out example code for `Resend` to get you started.
