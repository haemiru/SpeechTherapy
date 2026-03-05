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
  tongueThreshold: number;      // 혀 운동 감도 (jawOpen 프록시), 기본 0.3
  tongueHoldDurationMs: number; // 혀 운동 유지 시간, 기본 300
  tongueTotalRounds: number;    // 혀 운동 라운드 수, 기본 5
  soundBalloonThreshold: number;      // 음량 감도 (0.0 ~ 1.0), 기본 0.3
  soundBalloonHoldMs: number;          // 발성 유지 시간 (ms), 기본 1000
  soundBalloonTotalRounds: number;     // 라운드 수, 기본 5
  followSpeechThreshold: number;      // 유사도 임계값 (0.0 ~ 1.0), 기본 0.6
  followSpeechLevel: 1 | 2 | 3;       // 난이도 레벨, 기본 1
  followSpeechTotalRounds: number;     // 라운드 수, 기본 5
  soundEnabled: boolean;
  hapticEnabled: boolean;
}
