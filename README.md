# Cooldowns

**The future is an invitation, not a deadline.**

Cooldowns flips the script on alarms and calendars. Instead of nagging reminders, we offer gentle nudges. Instead of guilt, we offer grace. Life's best moments don't happen on autopilot.

## What is Cooldowns?

A mobile-first Progressive Web App (Android-first) that reimagines how you think about life's important rhythms. Doctor visits, workouts, vacations, stretching, calling someone you love — these aren't chores. They're cooldowns. You aren't *going* to do them. You're *cooling down* toward them. The doing part will happen.

## Philosophy

Most productivity apps assume the future is something to be conquered — alarms blare, calendars fill with dread. Cooldowns assumes the future is something to be *invited into*. Every recurring task is reframed as a cycle: you complete it, it cools down, and when it's ready again, the door opens. No guilt. No pressure. Just an invitation.

## Features

### Narrative Onboarding Wizard
A 10-screen feeling-first experience that asks "How do you want your week to feel?" before asking what to schedule. Users select vibes (Calm, Energized, Sharp, Connected, etc.) and the app intelligently suggests cooldowns that match their emotional goals.

- **Welcome** > **Vibe Selection** (8 feeling chips with dynamic narrative generation)
- **Body** (5 health/fitness cards) > **Mind** (3 learning/growth cards) > **People** (connection card)
- **Space & Self** (2 home/grooming cards) > **Adventure** (vacation + marketplace teaser)
- **Weekly Calendar Grid** (Mon-Sun x Morning/Afternoon/Evening) with auto-placement
- **Location** (optional, for weather-aware suggestions) > **Ready** (summary + confetti celebration)

### Dashboard with Dream Mode
Cards sorted by urgency with SVG progress rings, time-of-day greetings, and ambient backgrounds that shift with the time of day.

**Dream Mode**: A horizontally scrollable carousel of immersive dream cards that visualize your next cooldowns as first-person experiences. "You're running. The air is crisp. Your body knows what to do." Each card has a custom gradient, ambient emoji, evocative text, and sound hint.

### Messaging UI — Offerings, Not Spam
Instead of emailing spam, Cooldowns presents advertiser offerings as **conversations**. The marketplace is a chat-style messaging inbox where:

- **Inbox**: Conversation threads grouped by brand, sorted by relevance to your ready cooldowns
- **Thread View**: Brand messages appear as chat bubbles with offering details and one-click CTAs
- **Smart Relevance**: Offerings matching your ready cooldowns surface first with "Matches your cooldown" badges
- **Unread Tracking**: Coral dots indicate threads with fresh offerings tied to your active cooldowns

### Notification System
- Bell icon in the dashboard header with red dot for new notifications
- Slide-down notification drawer with "Cooldown ready" alerts and "New offering" messages
- Each notification taps through to the relevant detail modal or message thread
- PWA push notification permission flow in settings

### Persistent Storage
State survives page refreshes and browser restarts:
- Uses browser persistent storage when available (standalone PWA)
- Graceful in-memory fallback for sandboxed environments
- Persists: cooldowns, history, theme, vibes, week schedule, read states, notifications

### Settings
Dark mode toggle, notification preferences, push notification permission, reset onboarding, and the Cooldowns philosophy statement.

### Detail Modal
Bottom sheet with dream-mode gradient background, large progress ring, mark-complete with confetti celebration, and history timeline.

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

- **Palette**: Warm cream (#FBF9F6), coral primary (#E8734A), teal secondary (#2A9D8F)
- **Typography**: Instrument Serif (display) + Plus Jakarta Sans (body)
- **Dark Mode**: Full dark theme support with adapted palette
- **Ambient Themes**: Dashboard background shifts with time of day (morning/afternoon/evening/night)
- **Animations**: Golden easing curves, card enter animations, confetti system, progress ring transitions, dream card scale-up, notification drawer slide

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build step
- **PWA**: Service worker for offline caching, web app manifest for installability
- **Responsive**: Mobile-first, optimized for 375px-500px with safe area insets
- **Zero dependencies**: Everything runs from three files

## Running Locally

```bash
# Clone and serve
git clone https://github.com/pontifx/cooldowns.git
cd cooldowns
python -m http.server 8000
# Visit http://localhost:8000
```

Add `?demo` to the URL to auto-populate sample data and skip onboarding.

## Vision

> *"The goal is immersion and ease. I want to be able to dream and have it already be set what I am doing. We are eventually going to get so good at it, that we can match people to each place."*

Cooldowns is building toward a future where the app knows you well enough to turn your dreams into scheduled reality — matching people to places, experiences, and moments that fit who they are and who they want to become.

## Changelog

### v0.4.0 — Messaging UI + Notifications
- Chat-style messaging inbox replaces static marketplace
- Thread view with brand message bubbles and CTA replies
- Notification bell with slide-down drawer
- Smart relevance sorting (ready cooldowns surface matching offers)
- Unread tracking with coral dot badges
- PWA push notification permission flow

### v0.3.0 — Dream Mode + Persistence
- Immersive dream visualization carousel on dashboard
- 12 unique dream scenes with gradients, text, and sound hints
- Time-of-day ambient dashboard backgrounds
- Persistent storage layer (survives refreshes)
- Smart marketplace relevance badges

### v0.2.0 — Narrative Wizard
- 10-screen feeling-first onboarding wizard
- Vibe-to-cooldown mapping intelligence
- Weekly calendar grid with auto-placement
- Dynamic narrative text generation

### v0.1.0 — Foundation
- PWA shell with service worker
- Dashboard with progress rings
- 12 cooldown categories
- Marketplace with 14 offerings
- Dark mode support
- Detail modal with mark-complete

## License

MIT
