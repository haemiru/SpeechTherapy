'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ChildProfile, TherapistSettings } from '@/types/profile';
import { MOUTH_OPEN_THRESHOLD, LIP_PUCKER_THRESHOLD, HOLD_DURATION_MS, DEFAULT_TOTAL_ROUNDS, TONGUE_HOLD_DURATION_MS, SOUND_VOLUME_THRESHOLD, SOUND_HOLD_DURATION_MS, SPEECH_SIMILARITY_THRESHOLD } from '@/constants/thresholds';

interface ProfileStore {
  child: ChildProfile | null;
  settings: TherapistSettings;

  setChild: (profile: ChildProfile) => void;
  updateSettings: (partial: Partial<TherapistSettings>) => void;
  reset: () => void;
}

const defaultSettings: TherapistSettings = {
  mouthOpenThreshold: MOUTH_OPEN_THRESHOLD,
  lipPuckerThreshold: LIP_PUCKER_THRESHOLD,
  holdDurationMs: HOLD_DURATION_MS,
  totalRounds: DEFAULT_TOTAL_ROUNDS,
  tongueThreshold: 0.3,
  tongueHoldDurationMs: TONGUE_HOLD_DURATION_MS,
  tongueTotalRounds: DEFAULT_TOTAL_ROUNDS,
  soundBalloonThreshold: SOUND_VOLUME_THRESHOLD,
  soundBalloonHoldMs: SOUND_HOLD_DURATION_MS,
  soundBalloonTotalRounds: DEFAULT_TOTAL_ROUNDS,
  followSpeechThreshold: SPEECH_SIMILARITY_THRESHOLD,
  followSpeechLevel: 1,
  followSpeechTotalRounds: DEFAULT_TOTAL_ROUNDS,
  soundEnabled: true,
  hapticEnabled: true,
};

export const useProfileStore = create<ProfileStore>()(
  persist(
    (set) => ({
      child: null,
      settings: defaultSettings,

      setChild: (profile) => set({ child: profile }),

      updateSettings: (partial) =>
        set((state) => ({
          settings: { ...state.settings, ...partial },
        })),

      reset: () =>
        set({
          child: null,
          settings: defaultSettings,
        }),
    }),
    {
      name: 'speech-therapy-profile',
      skipHydration: true,
    }
  )
);
