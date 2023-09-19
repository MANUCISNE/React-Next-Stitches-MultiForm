import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',

      marineBlue: '#07284e',
      purplishBlue: '#5426a3',
      pastelBlue: '#9ac8d7',
      lightBlue: '#b8e1e3',
      strawberryRed: '#c44569',

      coolGray: '#a6afb8',
      lightGray: '#d4d8de',
      magnolia: '#f4f4f9',
      alabaster: '#fcfcfd',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      geral: '1rem',
    }
  }
})