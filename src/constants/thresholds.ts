/** 입 벌리기 게임 기본 임계값 */
export const MOUTH_OPEN_THRESHOLD = 0.6;

/** 입 오므리기 게임 기본 임계값 (mouthPucker) */
export const LIP_PUCKER_THRESHOLD = 0.4;

/** 오므리기 판정 시 입이 충분히 닫혀 있어야 함 */
export const JAW_OPEN_MAX_FOR_PUCKER = 0.15;

/** 성공 판정: 목표 유지 시간 (ms) */
export const HOLD_DURATION_MS = 500;

/** 라운드당 제한 시간 (초) */
export const ROUND_DURATION_SEC = 10;

/** 라운드 사이 쉬는 시간 (초) */
export const REST_BETWEEN_ROUNDS_SEC = 2;

/** 기본 라운드 수 */
export const DEFAULT_TOTAL_ROUNDS = 5;

/** 별 계산: 성공률 기반 */
export const STAR_THRESHOLDS = {
  /** 3개: 80% 이상 성공 */
  three: 0.8,
  /** 2개: 60% 이상 성공 */
  two: 0.6,
  /** 1개: 1라운드 이상 성공 */
  one: 0,
} as const;

/** 보너스 별: 최고값이 이 이상이면 +1 */
export const BONUS_PEAK_THRESHOLD = 0.9;

/** MediaPipe 모델 CDN */
export const MEDIAPIPE_WASM_CDN =
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm';

/** 카메라 해상도 제한 */
export const CAMERA_CONSTRAINTS: MediaStreamConstraints = {
  video: {
    facingMode: 'user',
    width: { ideal: 640 },
    height: { ideal: 480 },
  },
  audio: false,
};

/** 게이지 업데이트 주기 (ms) - requestAnimationFrame 목표 */
export const SENSOR_UPDATE_INTERVAL_MS = 33; // ~30fps
