# Small Business Website

A functional small-business website built with **React.js**, **Vite**, **React Router**, and **Supabase**, styled using the existing Shopper design system (`Jost` typography, `Feather` icons, and `theme.bundle.css`).

## Features

- **Home Page (`/`)**: Hero showcase, reasons to choose the business, business introduction, featured services overview, and enquiry call to action.
- **About Page (`/about`)**: Configurable business background, mission, vision, core values, and business details.
- **Services Page (`/services`)**: Data-driven service catalog with category filtering and direct service enquiry links that pre-fill the contact form subject.
- **Contact Page (`/contact`)**: Validated enquiry form (`full_name`, `email`, `subject`, `message`) with loading states, honeypot & cooldown spam protection, Supabase PostgreSQL persistence, and optional Resend email notification.
- **Responsive Navigation**: Mobile-friendly collapsible menu and active route highlighting.

## Project Structure

```text
├── public/                     # Static shell assets (css, fonts, images, js)
├── src/
│   ├── components/
│   │   ├── ContactForm.jsx     # Validated enquiry form with Supabase integration
│   │   └── Layout.jsx          # Header, navigation, and footer shell
│   ├── config/
│   │   ├── businessConfig.js   # Configurable business details, about & contact info
│   │   └── servicesConfig.js   # Configurable services catalog
│   ├── hooks/
│   │   └── useDocumentTitle.js # Dynamic per-page document titles
│   ├── lib/
│   │   └── supabaseClient.js   # Supabase JS client (public key only)
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ContactPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── services/
│   │   └── contactService.js   # Form validation & enquiry submission logic
│   └── styles/
│       └── custom.css          # Minimal overrides complementing theme.bundle.css
├── supabase/
│   ├── schema.sql              # `contact_messages` table & RLS policies
│   └── functions/
│       └── send-enquiry-email/ # Optional Edge Function for Resend notifications
├── .env.example
├── vercel.json                 # Vercel SPA rewrite configuration
└── vite.config.js
```

## 1. Local Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase project URL and publishable/anon key:
   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
   ```
   > **Security note:** Never place `SUPABASE_SECRET_KEY`, `service_role` keys, or `RESEND_API_KEY` in frontend environment variables.

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 2. Customizing Business Content

- **Business identity, About page, and Contact details**: Edit `src/config/businessConfig.js`. Optional contact fields (phone, address, social links) can be left empty or `null` and will be hidden automatically.
- **Services catalog**: Edit `src/config/servicesConfig.js` to add, remove, or update services and categories without modifying page components.

## 3. Supabase Database Setup

1. Open your Supabase project's **SQL Editor**.
2. Copy and run the contents of `supabase/schema.sql`.
3. This creates `public.contact_messages` with:
   - `id` (`uuid`, primary key)
   - `full_name` (`text`, required)
   - `email` (`text`, required)
   - `subject` (`text`, required)
   - `message` (`text`, required)
   - `created_at` (`timestamptz`, default `now()`)
4. **Row Level Security (RLS)**:
   - Public visitors (`anon`, `authenticated`) are granted `INSERT` only.
   - Public visitors cannot `SELECT`, `UPDATE`, or `DELETE` any submissions.

## 4. Optional Email Notifications (Resend)

Enquiries are always saved to Supabase first. To also receive an email notification when a new enquiry arrives:

1. Deploy the Edge Function using the Supabase CLI:
   ```bash
   supabase functions deploy send-enquiry-email --no-verify-jwt
   ```
2. Set the server-side secrets:
   ```bash
   supabase secrets set RESEND_API_KEY=re_your_api_key
   supabase secrets set NOTIFICATION_TO_EMAIL=owner@yourbusiness.example
   supabase secrets set NOTIFICATION_FROM_EMAIL="Website Enquiries <onboarding@resend.dev>"
   ```
   If email credentials are not configured, enquiries will still save to `contact_messages` without failing.

## 5. Deploying to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket (ensure `.env.local` is not committed).
2. Import the repository in **Vercel**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Add the following **Environment Variables** in Vercel Project Settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
4. `vercel.json` is already configured to rewrite all routes to `/index.html` for React Router SPA navigation.
5. After deployment, verify:
   - `/`, `/about`, `/services`, and `/contact` load directly and via navigation.
   - Refreshing `/services` or `/contact` returns `200` (not `404`).
   - Submitting the contact form inserts a row in Supabase `contact_messages`.
