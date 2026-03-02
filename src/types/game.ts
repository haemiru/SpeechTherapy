export type GameId = 'mouth-opening' | 'sound-balloon' | 'follow-speech' | 'my-records';

export type GameStatus = 'locked' | 'available' | 'completed';

/** 라운드 유형: 입 벌리기 or 입 오므리기 */
export type RoundType = 'open' | 'pucker';

export interface GameConfig {
  id: GameId;
  name: string;
  description: string;
  icon: string;
  route: string;
  status: GameStatus;
  totalRounds: number;
  roundDurationSec: number;
  restBetweenRoundsSec: number;
}

export type GamePhase =
  | 'ready'       // 준비 화면
  | 'countdown'   // 3-2-1 카운트다운
  | 'playing'     // 진행 중
  | 'round-success' // 라운드 성공
  | 'round-fail'    // 라운드 시간 초과
  | 'paused'      // 일시정지
  | 'finished';   // 모든 라운드 완료

export interface RoundResult {
  roundNumber: number;
  roundType: RoundType;   // 벌리기 or 오므리기
  success: boolean;
  peakValue: number;      // 최고 도달값 (0~1)
  holdDurationMs: number; // 목표 도달 유지 시간
  timestamp: number;
}

export interface GameResult {
  gameId: GameId;
  totalRounds: number;
  successCount: number;
  starsEarned: number;
  rounds: RoundResult[];
  totalDurationMs: number;
  peakValue: number;       // 전체 세션 최고값
  completedAt: number;
}
