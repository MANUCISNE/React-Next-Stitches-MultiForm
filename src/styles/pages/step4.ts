import { styled } from ".."

export const StepFourContainerBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',

  p: {
    display: 'flex',
    alignItems: 'center',
    color: '$gray300',
    fontSize: '0.8rem'
  }
});
