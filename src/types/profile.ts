export interface ChildProfile {
  name: string;
  age: number;           // 세
  createdAt: number;
}

export interface TherapistSettings {
  mouthOpenThreshold: number;   // 0.0 ~ 1.0, 기본 0.6
  lipPuckerThreshold: number;   // 0.0 ~ 1.0, 기본 0.4
  holdDurationMs: number;       // 성공 판정 유지 시간, 기본 500
  totalRounds: number;          // 라운드 수, 기본 5
  soundEnabled: boolean;
  hapticEnabled: boolean;
}
