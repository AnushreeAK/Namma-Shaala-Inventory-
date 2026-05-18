# Namma-Shaale: School Asset Management System

Namma-Shaale is a professional, institutional-grade asset management application designed for school administrators and teachers. It streamlines the tracking, auditing, and maintenance of educational infrastructure through a modern, mobile-first interface and AI-powered intelligence.

## 🚀 Key Features

- **Teacher Dashboard**: Real-time overview of classroom asset health, including active inventory, items needing repair, and critical broken equipment.
- **AI-Powered Audits**: Leverage Google's Gemini AI to synthesize complex audit data into professional executive summaries for School Development and Monitoring Committees (SDMC).
- **Live Audit Interface**: A rapid-fire verification system for auditing lab equipment and classroom sets with one-tap status updates.
- **Asset Inventory**: A searchable, filterable catalog of all school equipment with detailed metadata including serial numbers, room locations, and assigned personnel.
- **Digital Capture**: "Add Asset" workflow featuring a camera preview interface and barcode scanning simulation for quick equipment intake.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with Vite 6
- **Styling**: Tailwind CSS (Modern Corporate Aesthetic)
- **Animations**: Framer Motion for fluid transitions and state changes
- **Icons**: Lucide React
- **Routing**: React Router 7

### Backend
- **Server**: Express.js
- **Artificial Intelligence**: @google/genai (Gemini 1.5/3 Flash)
- **Runtime**: Node.js with `tsx` for TypeScript execution

## 📂 Project Structure

- `/src/App.tsx`: Main application router and navigation shell.
- `/src/screens/`: Individual page components (Dashboard, AssetsList, AddAsset, etc.).
- `/server.ts`: Express backend handling AI report generation and static file serving.
- `/src/types.ts`: Shared TypeScript interfaces for assets and audit data.
- `/metadata.json`: Application metadata and permissions.

## 🚦 Getting Started

1. **Environment Config**: Ensure `GEMINI_API_KEY` is set in your secrets to enable AI reporting.
2. **Development**: Run `npm run dev` to start the full-stack development environment.
3. **Build**: Run `npm run build` to compile the frontend and bundle the backend with esbuild.
