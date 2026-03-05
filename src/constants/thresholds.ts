/** 입 벌리기 게임 기본 임계값 */
export const MOUTH_OPEN_THRESHOLD = 0.6;

/** 입 오므리기 게임 기본 임계값 (mouthPucker) */
export const LIP_PUCKER_THRESHOLD = 0.4;

/** 오므리기 판정 시 입이 충분히 닫혀 있어야 함 */
export const JAW_OPEN_MAX_FOR_PUCKER = 0.15;

/** 성공 판정: 목표 유지 시간 (ms) */
export const HOLD_DURATION_MS = 500;

/** 혀 내밀기 기본 임계값 */
export const TONGUE_OUT_THRESHOLD = 0.4;

/** 혀 올리기 기본 임계값 */
export const TONGUE_UP_THRESHOLD = 0.5;

/** 혀 좌우 이동 기본 임계값 */
export const TONGUE_LATERAL_THRESHOLD = 0.4;

/** 혀 운동 성공 판정: 목표 유지 시간 (ms) — 혀 근육 피로가 빠르므로 짧게 */
export const TONGUE_HOLD_DURATION_MS = 300;

/** 혀 운동 라운드 간 휴식 시간 (초) */
export const TONGUE_REST_BETWEEN_ROUNDS_SEC = 3;

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

/** 소리 열기구: 기본 음량 임계값 */
export const SOUND_VOLUME_THRESHOLD = 0.4;

/** 소리 열기구: 발성 유지 시간 (ms) */
export const SOUND_HOLD_DURATION_MS = 1000;

/** 소리 열기구: 무음 기준 dB */
export const SOUND_SILENCE_DB = -60;

/** 소리 열기구: 최대 dB */
export const SOUND_MAX_DB = -10;

/** 소리 열기구: 프레임당 열기구 하강 속도 */
export const SOUND_BALLOON_DESCENT_RATE = 0.015;

/** 따라 말하기: 기본 유사도 임계값 */
export const SPEECH_SIMILARITY_THRESHOLD = 0.6;

/** 따라 말하기: 라운드 제한 시간 (초) */
export const SPEECH_ROUND_DURATION_SEC = 15;

/** 따라 말하기: TTS 읽기 속도 */
export const SPEECH_TTS_RATE = 0.8;

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
