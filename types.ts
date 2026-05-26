/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Position {
  x: number;
  y: number;
}

export type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export type GameStatus = 'START' | 'PLAYING' | 'PAUSED' | 'GAME_OVER';

export interface M3ColorPalette {
  id: string;
  name: string;
  primary: string;           // hex for raw canvas or Tailwind classes
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  background: string;        // container/app background
  surface: string;           // card/canvas background
  onSurface: string;
  surfaceVariant: string;    // list backgrounds or subtle details
  onSurfaceVariant: string;
  outline: string;
  snakeHead: string;         // Snake paint color
  snakeBody: string;         // Segment paint color
  foodColor: string;         // Food paint color
  specialFoodColor: string;  // Special/golden food color
  gridColor: string;         // Retro subtle grid color in canvas
  accent: string;
}

export interface GameStats {
  score: number;
  highScore: number;
  itemsEaten: number;
  movesCount: number;
  speedLevel: number;
}
