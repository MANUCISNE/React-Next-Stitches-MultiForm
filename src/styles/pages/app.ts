import { styled } from ".."

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'absolute',
})

export const FlexWrapper = styled("div", {
  display: "flex",
  height: "100vh",
});

export const CenterWrapper = styled("div", {
  maxWidth: "500px",
  width: "100%",
  paddingY: "10",
  paddingX: "2",
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

export const ButtonWrapper = styled("button", {
  paddingY: "2",
  paddingX: "4",
  borderRadius: "4px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
});


