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

export const CenterWrapper = styled("div", {
  maxWidth: "500px",
  position: 'absolute',
  display: 'flex',
  padding: '1.9rem',
  gap: '2rem',
  marginBottom: '8rem',
  justifyContent: 'center',
  flexDirection: "column",
});

export const TextDivProgressBar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$white',
  position: 'absolute',
  width: '10rem',
  marginLeft: '2rem',
  marginTop: 0,

  h5: {
    fontSize: '0.7rem',
    color: '$coolGray',
  },
  
  p: {
    width: '100%',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '$white',
  }
})

export const BoxWrapper = styled("div", {
  width: "80%",
});

export const ButtonNext = styled('button', {
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

export const ButtonDivPosition = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
