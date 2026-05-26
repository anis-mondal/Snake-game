/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { M3ColorPalette } from './types';

export const M3_THEMES: M3ColorPalette[] = [
  {
    id: 'sleek-sapphire',
    name: 'Sleek Sapphire',
    primary: '#005faf',
    onPrimary: '#ffffff',
    primaryContainer: '#dce2f9',
    onPrimaryContainer: '#151b2c',
    secondary: '#43474e',
    secondaryContainer: '#e1e2ec',
    onSecondaryContainer: '#43474e',
    background: '#fdfcff',
    surface: '#ffffff',
    onSurface: '#1a1c1e',
    surfaceVariant: '#e1e2ec',
    onSurfaceVariant: '#43474e',
    outline: '#74777f',
    snakeHead: '#005faf',
    snakeBody: '#3b82f6',
    foodColor: '#ba1a1a',          // Red
    specialFoodColor: '#dda600',   // Golden
    gridColor: 'rgba(0, 95, 175, 0.04)',
    accent: '#005faf',
  },
  {
    id: 'sage-meadow',
    name: 'Sage Meadow',
    primary: '#386b40',
    onPrimary: '#ffffff',
    primaryContainer: '#baf0ba',
    onPrimaryContainer: '#002206',
    secondary: '#52634f',
    secondaryContainer: '#dce5dd',
    onSecondaryContainer: '#101f10',
    background: '#f7fbf2',
    surface: '#ffffff',
    onSurface: '#191c18',
    surfaceVariant: '#e1e4dc',
    onSurfaceVariant: '#434842',
    outline: '#737971',
    snakeHead: '#2b5a32',
    snakeBody: '#45844e',
    foodColor: '#ba1a1a',          // Red
    specialFoodColor: '#c5a000',   // Golden
    gridColor: 'rgba(56, 107, 64, 0.04)',
    accent: '#386b40',
  },
  {
    id: 'violet-iris',
    name: 'Violet Iris',
    primary: '#6750a4',
    onPrimary: '#ffffff',
    primaryContainer: '#eaddff',
    onPrimaryContainer: '#21005d',
    secondary: '#625b71',
    secondaryContainer: '#e8def8',
    onSecondaryContainer: '#1d192b',
    background: '#fef7ff',
    surface: '#ffffff',
    onSurface: '#1d1b20',
    surfaceVariant: '#e7e0ec',
    onSurfaceVariant: '#49454f',
    outline: '#79747e',
    snakeHead: '#533c90',
    snakeBody: '#7f67be',
    foodColor: '#bf4e00',          // Bright Orange
    specialFoodColor: '#ffb300',   // Golden Yellow
    gridColor: 'rgba(103, 80, 164, 0.04)',
    accent: '#6750a4',
  },
  {
    id: 'terracotta-sun',
    name: 'Terracotta Warmth',
    primary: '#8f4e1c',
    onPrimary: '#ffffff',
    primaryContainer: '#ffdbcc',
    onPrimaryContainer: '#351000',
    secondary: '#755a4c',
    secondaryContainer: '#ffdccb',
    onSecondaryContainer: '#2b160b',
    background: '#fffbff',
    surface: '#ffffff',
    onSurface: '#201a17',
    surfaceVariant: '#f4dde4',
    onSurfaceVariant: '#52443d',
    outline: '#85736b',
    snakeHead: '#783b0f',
    snakeBody: '#a05c2c',
    foodColor: '#005faf',          // Indigo Blue Berry!!
    specialFoodColor: '#e09500',   // Rich gold
    gridColor: 'rgba(143, 78, 28, 0.04)',
    accent: '#8f4e1c',
  },
  {
    id: 'aqua-bay',
    name: 'Aqua Mist',
    primary: '#00668b',
    onPrimary: '#ffffff',
    primaryContainer: '#c4e7ff',
    onPrimaryContainer: '#001e2e',
    secondary: '#4d616c',
    secondaryContainer: '#d0e5f2',
    onSecondaryContainer: '#0a1d28',
    background: '#fafcff',
    surface: '#ffffff',
    onSurface: '#191c1d',
    surfaceVariant: '#dde3ea',
    onSurfaceVariant: '#41484d',
    outline: '#71787d',
    snakeHead: '#00506e',
    snakeBody: '#267fa6',
    foodColor: '#b02d00',          // Deep Cherry Red
    specialFoodColor: '#dda600',   // Yellow
    gridColor: 'rgba(0, 102, 139, 0.04)',
    accent: '#00668b',
  },
  {
    id: 'charcoal-basalt',
    name: 'Basalt Dark',
    primary: '#9ecaff',
    onPrimary: '#003258',
    primaryContainer: '#00497d',
    onPrimaryContainer: '#d1e4ff',
    secondary: '#bbc7db',
    secondaryContainer: '#44474f',
    onSecondaryContainer: '#e1e2ec',
    background: '#1a1c1e',
    surface: '#202429',
    onSurface: '#e2e2e6',
    surfaceVariant: '#43474e',
    onSurfaceVariant: '#c3c7d0',
    outline: '#8d9199',
    snakeHead: '#82b1ff',
    snakeBody: '#5c8edd',
    foodColor: '#ffb4a9',          // Pastel Red-Pink
    specialFoodColor: '#eac435',   // Vivid Golden Yellow
    gridColor: 'rgba(255, 255, 255, 0.03)',
    accent: '#9ecaff',
  }
];

export const DEFAULT_THEME = M3_THEMES[0];

export function getAdaptedTheme(theme: M3ColorPalette, isDarkMode: boolean): M3ColorPalette {
  if (!isDarkMode) {
    return theme;
  }
  
  switch (theme.id) {
    case 'sleek-sapphire':
      return {
        ...theme,
        primary: '#a5c8ff',
        onPrimary: '#00315e',
        primaryContainer: '#004885',
        onPrimaryContainer: '#d5e3ff',
        secondary: '#bec6dc',
        secondaryContainer: '#3e4759',
        onSecondaryContainer: '#dae2f9',
        background: '#101318',
        surface: '#1a1c22',
        onSurface: '#e2e2e9',
        surfaceVariant: '#414753',
        onSurfaceVariant: '#c3c6cf',
        outline: '#8d919d',
        snakeHead: '#60a5fa',
        snakeBody: '#2563eb',
        foodColor: '#ffb4a9',
        specialFoodColor: '#ffd043',
        gridColor: 'rgba(165, 200, 255, 0.05)',
        accent: '#a5c8ff',
      };
    case 'sage-meadow':
      return {
        ...theme,
        primary: '#9ed69d',
        onPrimary: '#003912',
        primaryContainer: '#005320',
        onPrimaryContainer: '#b9f3b8',
        secondary: '#b9cbb5',
        secondaryContainer: '#3b4b39',
        onSecondaryContainer: '#d5e8cf',
        background: '#0f140f',
        surface: '#171c17',
        onSurface: '#e1e3dd',
        surfaceVariant: '#414940',
        onSurfaceVariant: '#c1c9be',
        outline: '#8b9389',
        snakeHead: '#4ade80',
        snakeBody: '#16a34a',
        foodColor: '#ffb4a9',
        specialFoodColor: '#ecd06f',
        gridColor: 'rgba(158, 214, 157, 0.05)',
        accent: '#9ed69d',
      };
    case 'violet-iris':
      return {
        ...theme,
        primary: '#d0bcff',
        onPrimary: '#381e72',
        primaryContainer: '#4f378b',
        onPrimaryContainer: '#eaddff',
        secondary: '#ccc2dc',
        secondaryContainer: '#4a4458',
        onSecondaryContainer: '#e8def8',
        background: '#121016',
        surface: '#1a1820',
        onSurface: '#e6e1e9',
        surfaceVariant: '#48454e',
        onSurfaceVariant: '#c9c4d0',
        outline: '#938f99',
        snakeHead: '#a855f7',
        snakeBody: '#7c3aed',
        foodColor: '#ffb4ab',
        specialFoodColor: '#ffd54f',
        gridColor: 'rgba(208, 188, 255, 0.05)',
        accent: '#d0bcff',
      };
    case 'terracotta-sun':
      return {
        ...theme,
        primary: '#ffb58b',
        onPrimary: '#542100',
        primaryContainer: '#723506',
        onPrimaryContainer: '#ffdbcc',
        secondary: '#e7beb2',
        secondaryContainer: '#5c4033',
        onSecondaryContainer: '#ffdbcc',
        background: '#14110f',
        surface: '#1c1816',
        onSurface: '#ece0db',
        surfaceVariant: '#53433e',
        onSurfaceVariant: '#d8c2bb',
        outline: '#a08d87',
        snakeHead: '#fb923c',
        snakeBody: '#ea580c',
        foodColor: '#93c5fd', 
        specialFoodColor: '#ffcc00',
        gridColor: 'rgba(255, 181, 139, 0.05)',
        accent: '#ffb58b',
      };
    case 'aqua-bay':
      return {
        ...theme,
        primary: '#7dd3fc',
        onPrimary: '#00354b',
        primaryContainer: '#004d6c',
        onPrimaryContainer: '#c4e7ff',
        secondary: '#b5c9d5',
        secondaryContainer: '#374955',
        onSecondaryContainer: '#cfe5f2',
        background: '#0f1316',
        surface: '#161b1e',
        onSurface: '#e1e2e5',
        surfaceVariant: '#40484d',
        onSurfaceVariant: '#c0c7cd',
        outline: '#8a9297',
        snakeHead: '#38bdf8',
        snakeBody: '#0284c7',
        foodColor: '#fca5a5',
        specialFoodColor: '#f1c40f',
        gridColor: 'rgba(125, 211, 252, 0.05)',
        accent: '#7dd3fc',
      };
    default:
      return theme;
  }
}
