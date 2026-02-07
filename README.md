# OnboardAI - Client Demo Request Frontend

A premium, modern demo request landing page for OnboardAI - an AI-powered Talent Acquisition platform.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
src/
├── api/                        # API layer (5 files)
│   ├── config.ts               # API configuration & endpoints
│   ├── demoRequestApi.ts       # Main API service
│   ├── index.ts                # Barrel export
│   ├── mockApi.ts              # Mock API for development
│   └── types.ts                # TypeScript interfaces
├── assets/                     # Static assets (1 file)
│   └── onboardai-hero.png      # Hero section image
├── pages/                      # Page components (3 files)
│   ├── DemoRequestPage.tsx     # Demo request showcase + modal form
│   ├── LandingPage.tsx         # Main landing page
│   └── PricingPage.tsx         # Pricing tiers page
├── App.tsx                     # App with React Router
├── index.css                   # Global styles & design tokens
└── main.tsx                    # Entry point

Total: 12 source files
```

## 🛠️ Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

## 🌍 Environment Configuration

The app supports multiple environments: **Development**, **QA**, and **Production**.

### Environment Files

| File | Purpose | Committed to Git |
|------|---------|------------------|
| `.env.development` | Development settings | ✅ Yes |
| `.env.qa` | QA/Staging settings | ✅ Yes |
| `.env.production` | Production settings | ✅ Yes |
| `.env.example` | Template for local overrides | ✅ Yes |
| `.env.local` | Local overrides (create from .env.example) | ❌ No |

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_APP_ENV` | Current environment | `development`, `qa`, `production` |
| `VITE_API_URL` | Backend API base URL | `https://api.onboardai.io/api` |
| `VITE_USE_MOCK` | Use mock API | `true` or `false` |
| `VITE_APP_NAME` | App name displayed | `OnboardAI` |
| `VITE_DEBUG_MODE` | Enable debug logging | `true` or `false` |

### Build Commands

| Command | Environment | Description |
|---------|-------------|-------------|
| `npm run dev` | Development | Start dev server with HMR |
| `npm run build` | Default | Build for production |
| `npm run build:dev` | Development | Build with dev settings |
| `npm run build:qa` | QA/Staging | Build for QA environment |
| `npm run build:prod` | Production | Build for production |
| `npm run preview` | Default | Preview production build |
| `npm run preview:qa` | QA | Preview QA build |
| `npm run preview:prod` | Production | Preview production build |

### Deployment Workflow

```bash
# Development
npm run build:dev

# QA/Staging
npm run build:qa

# Production
npm run build:prod
```

## 🔌 API Configuration

The app uses a mock API by default in development. Configuration is automatic based on environment.

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/demo-requests` | Submit demo request |
| GET | `/api/industries` | Get industry options |
| GET | `/api/company-sizes` | Get company size options |
| GET | `/api/timeslots` | Get available time slots |

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, features, testimonials |
| `/pricing` | Pricing tiers (Starter, Professional, Enterprise) |
| `/demo-request` | Interactive demo request with modal form |

## 🎨 Design System

- **Primary Color**: `#6366F1` (Indigo)
- **Accent Color**: `#8B5CF6` (Purple)
- **Font Display**: Outfit
- **Font Body**: Inter
- **Effects**: Glassmorphism, gradient backgrounds, micro-animations

## 📝 License

MIT
# Client-Website-FE
