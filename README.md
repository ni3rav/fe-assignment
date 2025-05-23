# Frontend Assignment

This repository contains a take-home assignment created by Nirav as part of an application process. It demonstrates a modern web application built with cutting-edge technologies and best practices.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) with Google OAuth support
- **Database**: [Neon](https://neon.tech) for serverless PostgreSQL
- **Deployment**: [Vercel](https://vercel.com)

## Features

- Secure authentication with Google OAuth
- Modern and responsive UI with shadcn/ui components
- Mobile-friendly design
- Protected routes implementation
- Loading states and error handling

## Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/ni3rav/fe-assignment
   cd fe-assignment
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:

   ```
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=your_connection_string
   ```

4. **Initialize the database**

   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Start the development server**

   ```bash
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## Build for Production

```bash
pnpm build
```

