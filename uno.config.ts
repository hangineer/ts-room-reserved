// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      // 主要色 Primary
      'primary': {
        'dark': '#7B6651', //深咖啡
        'base': '#BF9D7D',
        '800': '#D0B79F',
        '600': '#E1D1C2',
        '400': '#F1EAE4',
        '300': '#F5F7F9',
        'tint': '#FAF7F5', // 最淺
        'gradient': '#BE9C7C',
      },
      // 中性色 Neutral
      'secondary': {
        'dark': '#140F0A',
        '800': '#4B4B4B',
        '600': '#909090',
        '400': '#ECECEC',
        '100': '#F9F9F9',
      },
      // 語意輔助色 Semantic
      'success': {
        'dark': '#299F65', //深綠
        'base': '#52DD7E',
        '200': '#BCFBBD',
        '100': '#E8FEE7',
      },
      'info': {
        'dark': '#1D66AC', //深藍
        'base': '#3BADEF',
        '20': '#B1EFFD',
        '10': '#E6FBFE',
      },
      'alert' : {
        'dark': '#C22538', //深紅
        'base': '#DA3E51',
        '200': '#F5CCD1',
        '100': '#FDECEF',
      },
    },
    rules: [
      [/^text-(.*)$/, ([, c], { theme }) => {
        if (theme.colors[c])
          return { color: theme.colors[c] };
      }],
    ],
    breakpoints: {}
  },
  shortcuts: {
    'text-heading': 'text-10 leading-12 tracking-0.5',
    'pagination-default': 'inline-block w-8 h-1 bg-primary-400 rounded-25',
    'active': 'bg-primary-base',
  },
  presets: [
    presetUno(),
    presetWebFonts({
      fonts: {
        noto: 'Noto Serif TC',
      },
    }),
  ],
});