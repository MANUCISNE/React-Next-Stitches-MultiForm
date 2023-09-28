import { css, styled } from ".."

export const ContainerImageBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const ContainerAppBox = styled('div', {
  margin: '14rem auto',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  background: '$white',
  height: '28rem',
  width: '48rem',
  borderRadius: '8px',

  '@media (max-width: 375px)': {
    position: 'absolute',
    height: '26rem',
    width: '19rem',
    marginTop: '5rem',
    marginLeft: '2.3rem',
    borderRadius: '2rem',
    zIndex: 5,
  },
})

export const PictureBackground = styled('picture', {
  '@media (max-width: 375px)': {
    display: 'none',
  },
})

export const ButtonContainerApp = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginLeft: "3rem",

  '@media (max-width: 375px)': {
    marginLeft: '1rem',
    marginTop: '-2.3rem',
  },
});

export const ButtonDivBox = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1.5rem",
  width: "80%",

  '@media (max-width: 375px)': {
    //marginTop: "-.8rem",
  },
});

export const Boxtest = styled("div", {
  background: 'red',
  width: '5rem',
});

export const ProgressBarBoxApp = styled("div", {
  width: "12rem",
  position: 'absolute',
  display: 'flex',
  padding: '1.8rem',
  gap: '1rem',
  marginBottom: '12rem',
  marginRight: '2rem',
  flexDirection: "row",
  flexWrap: 'wrap',

  '@media (max-width: 375px)': {
    display: 'flex',
    flexDirection: 'row',
    width: '5rem',
    flexWrap: 'nowrap',
    position: 'absolute',
    marginBottom: '30rem',
    marginLeft: '1.3rem',
    zIndex: '-3'
  },
});

export const TextDivProgressBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$white',

  h5: {
    fontSize: '0.7rem',
    color: '$coolGray',
  },
  
  p: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '$white',
  },

  '@media (max-width: 375px)': {
    display: 'none',
  },
})

export const BoxWrapper = styled("div", {
  width: "80%",

  '@media (max-width: 375px)': {
    width: "93%",
  },
});

export const ButtonNext = styled('button', {
  position: "absolute",
  marginLeft: '21rem',
  fontSize: '$geral',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.4rem',
  backgroundColor: '$marineBlue',
  color: '$white',
  minWidth: '8rem',
  maxWidth: '8rem',
  padding: '0.8rem 1.2rem',

  '@media (max-width: 375px)': {
    marginLeft: '9rem',
    marginTop: '3.5rem',
    padding: '0.8rem 0.8rem',
  },
})

export const GoBackButton = styled('button', {
  textDecoration: 'none',
  color: '$marineBlue',
  background: 'transparent',
  border: 'none',
  fontWeight: 'bold',
  
  '&:hover': {
    color: '#0000ff',
    cursor: 'pointer',
  },

  '@media (max-width: 375px)': {
    position: 'absolute',
    marginLeft: '0rem',
    marginTop: '3.5rem',
    padding: '.8rem',
  },
})

export const ButtonDivPosition = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
