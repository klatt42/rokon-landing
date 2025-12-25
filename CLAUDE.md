# ROKon Landing Page

**Project Type**: Next.js Waitlist Landing Page
**Tech Stack**: Next.js 16, TypeScript, Tailwind CSS
**Status**: Frontend Complete, Backend Pending
**Repository**: github.com/klatt42/rokon-landing

---

## Quick Start

```bash
cd /home/klatt42/projects/rokon-landing
npm run dev -- -p 3012
# Visit: http://localhost:3012
```

## Project Overview

ROKon waitlist landing page with tactical/military theme. Separate from main serp-master app for clean deployment.

### Brand Theme

**ROKon = REVEAL - OPTIMIZE - KONQUER**

| Phase | Color | Hex | Meaning |
|-------|-------|-----|---------|
| R | Cyan | #00d4ff | REVEAL - Expose weaknesses |
| O | Orange | #ff6b35 | OPTIMIZE - Execute fixes |
| K | Green | #00ff88 | KONQUER - Total domination |

### Key Features

- Dark tactical theme with animated radar HUD
- Fighter jet logo with climbing bars
- Terminal mockup showing threat assessment
- 7 creative CTAs for waitlist conversion
- Social proof and urgency elements
- FAQ section and comparison tables
- SEO-optimized metadata

## File Structure

```
rokon-landing/
├── src/app/
│   ├── page.tsx        # Main landing page (740 lines)
│   ├── layout.tsx      # SEO metadata
│   └── globals.css     # Tactical theme CSS
├── claude-progress.txt # Session handoff
└── CLAUDE.md          # This file
```

## Components (in page.tsx)

| Component | Purpose |
|-----------|---------|
| ROKonLogo | F-15 jet SVG + climbing bars |
| RadarHUD | Animated radar with sweep + blips |
| PhaseCard | R-O-K phase cards with badges |
| WaitlistForm | Email + role form with states |
| StatCounter | Animated stat display |
| TestimonialCard | Social proof quotes |

## Next Steps

1. **Supabase Backend**: Connect waitlist form to collect emails
2. **Netlify Deploy**: Production hosting
3. **Analytics**: Add Plausible or GA4
4. **OG Image**: Create social share image
5. **Exit Intent**: Optional popup for conversion

## Session Recovery

Run `/session-start` to:
1. Load this context
2. Check claude-progress.txt for status
3. Continue from where we left off

---

*Part of ROKon brand transition from SERP-Master*
