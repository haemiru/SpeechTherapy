# Speech-Therapy — 소리야 놀자!

발달장애 아동(3~10세) 대상 웹 기반 언어치료 게임 서비스.

## Commands

```bash
npm run dev      # Next.js dev server (port 3000)
npm run build    # Production build → .next/
npm run start    # Serve production build
```

No test runner configured yet.

## Tech Stack

- **Next.js 15** (App Router, `src/` directory)
- **TypeScript** strict mode
- **Tailwind CSS v4** (`@tailwindcss/postcss`)
- **Zustand 5** + persist middleware → localStorage
- **@mediapipe/tasks-vision** — Face Landmarker (jawOpen, tongueOut, tongueUp blendshapes)
- **Deployment**: Vercel (https://speech-therapy-ten-theta.vercel.app/)

## Architecture

### Folder Structure
```
src/
├── app/               # Next.js App Router pages
│   ├── (game)/        # Game route group (shared layout with HydrationGuard)
│   │   ├── home/      # Home screen
│   │   ├── mouth-opening/      # Game 1: Camera permission
│   │   │   └── play/           # Game 1 play screen (jaw/lip)
│   │   ├── tongue-exercises/   # Game 4: Tongue exercise entry
│   │   │   └── play/           # Game 4 play screen (tongue)
│   │   ├── result/    # Result/reward screen
│   │   └── puppy/     # Puppy detail screen
│   └── globals.css    # Tailwind + keyframe animations
├── components/
│   ├── ui/            # Button, Card, ProgressBar, StarDisplay, Modal, etc.
│   ├── game/          # GameHeader, CameraView, GaugeOverlay, etc.
│   ├── puppy/         # PuppyAvatar, PuppyWidget, GrowthProgress
│   ├── reward/        # ConfettiEffect, ResultCard
│   └── shared/        # HydrationGuard, PermissionPrompt, ErrorBoundary
├── hooks/
│   ├── sensors/       # useFaceLandmarker, useMouthMetrics
│   ├── game/          # useGameSession, useGameTimer, useSuccessJudgment, useReward
│   ├── useCamera.ts
│   └── useSound.ts
├── stores/            # Zustand (persist → localStorage, skipHydration)
├── types/             # TypeScript type definitions
├── constants/         # Game configs, puppy stages, thresholds
├── utils/             # cn(), faceGeometry helpers
├── services/          # localStorageService (Phase 2 → Supabase)
└── lib/               # mediapipe config
```

### Key Patterns

1. **Game Pipeline**: Sensor → Real-time Feedback → Success Judgment → Reward → Store
2. **Zustand SSR**: All persist stores use `skipHydration: true` + `HydrationGuard` component
3. **MediaPipe**: Dynamic import, GPU delegate, CDN model load, `detectForVideo()` in rAF loop
4. **Puppy Growth**: Stars never decrease. 5 stages: 🥚→🐣→🐕→🐶→👑

### Clinical Principles

- No penalties, no leaderboards, only positive feedback
- Puppy never gets sick or sad (no regression)
- Camera data is processed locally (edge AI), never sent to server
- Large touch targets (48px minimum), child-friendly UI

## UI Language

All UI text is in **Korean**. The app targets Korean-speaking children and parents.

## Design References

- `docs/design/prototype.html` — Interactive UI prototype
- `docs/design/ui-wireframes.md` — Wireframe specifications
- `docs/design/puppy-growth-system.md` — Puppy growth rules

## Games

| # | Game ID | Name | Sensor | Status |
|---|---------|------|--------|--------|
| 1 | `mouth-opening` | 입 운동 | MediaPipe Face (jawOpen, mouthPucker) | ✅ Available |
| 4 | `tongue-exercises` | 혀 운동 | MediaPipe Face (tongueOut, tongueUp, tongueLeft/Right) | 🔜 Next |
| 2 | `sound-balloon` | 소리 열기구 | Web Audio API (volume dB) | 🔒 Locked |
| 3 | `follow-speech` | 따라 말하기 | Web Speech API (pronunciation) | 🔒 Locked |

Development priority: 구강운동(입+혀) → 발성(소리) → 조음(따라 말하기)

## Meeting Notes

- `docs/meetings/001-kickoff.md` — Kickoff meeting (MVP scope, clinical requirements)
- `docs/meetings/002-tongue-exercise-design.md` — Tongue exercise game design
