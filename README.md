# 🏋️‍♂️ Gravity Fitness Gym

A premium, hardcore web application for **Gravity Fitness Gym** in Patna — the ultimate training ground for powerlifters, strongmen, and strength athletes. Built with a focus on raw aesthetics, premium dark-mode visuals, film-grain texture, and smooth interactive elements.

---

## 📸 Screenshots

Here is a visual walkthrough of the Gravity Fitness Gym web application:

### 1. Hero Section
The high-impact entryway to the gym, setting the hardcore tone with dramatic black-and-white imagery and bold typography.
![Hero Section](screenshots/hero.png)

### 2. Programs & counter stats
Highlights what the gym offers (Powerlifting, Strength & Conditioning, Personal Coaching, and Open Gym) alongside live counter statistics of members trained, years open, and national champions.
![Programs Section](screenshots/programs.png)

### 3. Weekly Training Schedule
An interactive weekly timetable showcasing slots for specialized classes.
![Class Schedule](screenshots/schedule.png)

### 4. Membership Plans
Pricing comparison cards (Basic, Pro, Elite) designed for clear conversion.
![Membership Plans](screenshots/membership.png)

### 5. Member Testimonials
High-contrast quotes and feedback from real members who have achieved massive PRs and rehabbed injuries.
![Member Testimonials](screenshots/testimonials.png)

### 6. The Gym Floor (Facility Gallery)
Showcasing the premium equipment and facility floor through a sleek grid layout.
![The Gym Floor](screenshots/facility.png)

### 7. Coaches Profiles
Lifting credentials, specialties, and bios of the certified coaching staff.
![Coaches Profiles](screenshots/coaches.png)

### 8. Contact & Enquiries Form
A public lead-generation contact form allowing potential lifters to submit their details directly to the database.
![Contact & Enquiries](screenshots/contact.png)

---

## ⚡ Features

- **Modern Dark & Hardcore Aesthetic**: Custom dark color palette (`ink` & `ash` gray shades) highlighted with high-contrast `blood` red accents.
- **Cinematic Film Grain Overlay**: Immersive visual atmosphere utilizing a high-performance SVG noise overlay.
- **Sleek Custom Scrollbar**: Premium custom scrollbar matching the dark theme of the website with animated hover transitions to the signature red color.
- **Interactive Component Layouts**:
  - **Programs Grid**: Spotlighting Powerlifting, Strength & Conditioning, Bodybuilding, etc.
  - **Coaches Profiles**: Displaying the lifting credentials and specializations of the training team.
  - **Interactive Timetable**: Clean horizontal scrollable timetable displaying weekly class slots.
  - **Membership Packages**: Visual tier cards comparing Basic, Pro, and Elite levels.
  - **Contact & Enquiries Form**: Fully functional lead generation form integrated with a database backend.
- **Framer Motion Animations**: Reveal animations and scroll-triggered transitions for interactive feedback.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 2. Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/cipher-team-1007/fitness-iron-core.git
cd fitness-iron-core
npm install
```

### 3. Database Setup (Supabase)

This project uses **Supabase** as its backend database to store contact form enquiries.

1. Create a free project at [Supabase](https://supabase.com/).
2. Run the migration script located in `supabase/migrations/20260710073519_create_enquiries_table.sql` inside the Supabase SQL Editor. This will create the `enquiries` table and configure Row Level Security (RLS) policies for anonymous form submissions.

### 4. Environment Setup

Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Running the Development Server

Start the Vite local dev server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 6. Build for Production

To build the application for deployment:

```bash
npm run build
```

The output files will be generated inside the `dist/` directory.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (with custom extensions)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Backend/Database Integration**: [Supabase Client](https://supabase.com/)

---

## 📂 Project Structure

```text
fitness-iron-core/
├── public/               # Static public assets (custom B&W dumbbell rack image, etc.)
├── screenshots/          # Web previews and images for documentation
├── src/
│   ├── components/       # Reusable React components (Navbar, Hero, Stats, etc.)
│   ├── hooks/            # Custom hooks (e.g. useCountUp for numbers)
│   ├── lib/              # Library clients (Supabase setup)
│   ├── App.tsx           # Main application shell
│   ├── index.css         # Tailwind directives & global custom styles (scrollbar, etc.)
│   └── main.tsx          # Application entry point
├── supabase/             # Database migrations and configurations
├── tailwind.config.js    # Design system tokens (colors, font-families, layouts)
├── vite.config.ts        # Vite environment configs
└── package.json          # Node dependencies and scripts
```
