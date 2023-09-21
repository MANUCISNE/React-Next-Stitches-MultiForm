import { styled } from ".."

export const Container = styled('div', {
  margin: '14rem auto',
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  background: '$white',
  height: '28rem',
  width: '48rem',
  borderRadius: '8px',
})

export const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginLeft: "3rem",
});

export const ButtonDivTeste = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1.5rem",
  width: "80%",
});

export const Boxtest = styled("div", {
  background: 'red',
  width: '5rem',
});

export const CenterWrapper = styled("div", {
  width: "12rem",
  position: 'absolute',
  display: 'flex',
  padding: '1.8rem',
  gap: '1rem',
  marginBottom: '12rem',
  marginRight: '2rem',
  flexDirection: "row",
  flexWrap: 'wrap',
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
  }
})

export const BoxWrapper = styled("div", {
  width: "80%",
});

export const ButtonNext = styled('button', {
  position: "absolute",
  marginLeft: '15rem',
  fontSize: '$geral',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.4rem',
  backgroundColor: '$marineBlue',
  color: '$white',
  minWidth: '8rem',
  maxWidth: '8rem',
  padding: '0.8rem 1.2rem',
  transition: '0.1s',
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
  }
})

export const ButtonDivPosition = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
