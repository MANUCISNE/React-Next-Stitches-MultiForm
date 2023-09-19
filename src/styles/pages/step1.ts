import { styled } from ".."

export const WrapperContainerStep1 = styled('div', {
  margin: 'auto',
  display: 'flex',
  padding: '1rem',
  background: '$white',
  height: '28rem',
  width: '48rem',
  borderRadius: '8px',
});

export const FormDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '8rem 5rem 1rem 6rem',
  gap: '0.8rem',
  justifyContent: 'flex-end',
});

export const ButtonNextStep1 = styled('button', {
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

export const Label = styled('label', {
  marginBottom: '0.5rem',
  fontSize: '1rem',
  color: '$gray700',
});

export const InputField = styled('input', {
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  outline: 'none',

    '&:hover': {
      borderColor: '$purplishBlue',
      cursor: 'pointer',
      backgroundColor: '$magnolia',
  }
});

export const ErrorText = styled('p', {
  color: 'red',
  fontSize: '0.875rem',
  marginTop: '0.25rem',
});