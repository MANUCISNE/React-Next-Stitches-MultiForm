import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: '$lightBlue',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontSize: '$geral',
  },

  'body, input, textarea, button, p': {
    fontFamily: 'Ubuntu',
    fontWeight: 400,
    color: '$gray800',
  }
})