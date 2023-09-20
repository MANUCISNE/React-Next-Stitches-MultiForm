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

export const FlexWrapper = styled("div", {
  display: "flex",
  height: "100vh",
});

export const CenterWrapper = styled("div", {
  maxWidth: "500px",
  width: "100%",
  position: 'absolute',
  display: 'flex',
  padding: '1.5rem',
  gap: '2rem',
  marginBottom: '10rem',
  justifyContent: 'center',
  flexDirection: "column",
});

export const HStackWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "space-between",
  marginTop: "4",
});

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


