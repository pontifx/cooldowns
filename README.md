# Cooldowns

**The future is an invitation, not a deadline.**

Cooldowns flips the script on alarms and calendars. Instead of nagging reminders, we offer gentle nudges. Instead of guilt, we offer grace. Life's best moments don't happen on autopilot.

## What is Cooldowns?

A mobile-first Progressive Web App (Android-first) that reimagines how you think about life's important rhythms. Doctor visits, workouts, vacations, stretching, calling someone you love — these aren't chores. They're cooldowns. You aren't *going* to do them. You're *cooling down* toward them. The doing part will happen.

## Philosophy

Most productivity apps assume the future is something to be conquered — alarms blare, calendars fill with dread. Cooldowns assumes the future is something to be *invited into*. Every recurring task is reframed as a cycle: you complete it, it cools down, and when it's ready again, the door opens. No guilt. No pressure. Just an invitation.

## Features

### 🧙 Narrative Onboarding Wizard
A 10-screen feeling-first experience that asks "How do you want your week to feel?" before asking what to schedule. Users select vibes (Calm, Energized, Sharp, Connected, etc.) and the app intelligently suggests cooldowns that match their emotional goals.

- **Welcome** → **Vibe Selection** (8 feeling chips with dynamic narrative generation)
- **Body** (5 health/fitness cards) → **Mind** (3 learning/growth cards) → **People** (connection card)
- **Space & Self** (2 home/grooming cards) → **Adventure** (vacation + marketplace teaser)
- **Weekly Calendar Grid** (Mon-Sun × Morning/Afternoon/Evening visual layout)
- **Location** (optional, for weather-aware suggestions) → **Ready** (summary + confetti celebration)

### 📊 Dashboard
Cards sorted by urgency with SVG progress rings, time-of-day greetings, and weather-aware taglines. Each cooldown shows its cycle status: Fresh (just completed), Cooling (in progress), or Ready (time to refresh).

### 🛍️ Marketplace — Offerings, Not Ads
Instead of emailing spam, Cooldowns builds a messaging-style UI where curated advertisers make one-click offerings relevant to your cooldowns. When your dental cooldown is ready, a cleaning special appears. When vacation time arrives, real trip options show up.

Organized by category: Health, Fitness, Travel, Home, Learning, Finance.

### ⚙️ Settings
Dark mode toggle, notification preferences, reset onboarding, and the Cooldowns philosophy statement.

### 🔄 Detail Modal
Bottom sheet with large progress ring, mark-complete with confetti celebration, and history timeline showing past completions.

## 12 Cooldown Categories

| Category | Icon | Suggested Frequency |
|----------|------|-------------------|
| Doctor Checkup | 🩺 | Every 12 months |
| Eye Exam | 👁️ | Every 12 months |
| Dental Cleaning | ✨ | Every 6 months |
| Workout | 🔥 | Every 2-3 days |
| Stretch | 🧘 | Daily |
| Take a Vacation | 🌴 | Every 3-6 months |
| Mix Things Up | 🎲 | Every 2 weeks |
| Haircut | ✂️ | Every 4-6 weeks |
| Deep Clean Home | 🏠 | Every 2 weeks |
| Call Someone You Love | 💛 | Every week |
| Learn Something New | 💡 | Every week |
| Financial Checkup | 📊 | Every month |

## Design

- **Palette**: Warm cream (#FBF9F6), coral primary (#E8734A), teal secondary (#2A9D8F) — intentionally warm and inviting
- **Typography**: Instrument Serif (display) + Plus Jakarta Sans (body)
- **Dark Mode**: Full dark theme support with adapted palette
- **Animations**: Golden easing curves, card enter animations, confetti system, progress ring transitions

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **PWA**: Service worker for offline caching, web app manifest for installability
- **Responsive**: Mobile-first, optimized for 375px–500px with safe area insets
- **Zero dependencies**: Everything runs from three files

## Running Locally

1. Clone the repo
2. Serve the `cooldowns/` directory with any static server
3. Open on your phone or in mobile device emulation

```bash
# Quick start with Python
python -m http.server 8000
# Then visit http://localhost:8000
```

Add `?demo` to the URL to auto-populate sample data and skip onboarding.

## Vision

> *"The goal is immersion and ease. I want to be able to dream and have it already be set what I am doing. We are eventually going to get so good at it, that we can match people to each place."*

Cooldowns is building toward a future where the app knows you well enough to turn your dreams into scheduled reality — matching people to places, experiences, and moments that fit who they are and who they want to become.

## License

MIT
