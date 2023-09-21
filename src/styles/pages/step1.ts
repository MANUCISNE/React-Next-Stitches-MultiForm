import { styled } from ".."

export const WrapperContainerStep1 = styled('div', {
  
});

export const FormDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
  marginBottom: '0.7rem',
  gap: '.5rem',
  justifyContent: 'flex-end',

  p: {
    color: '$gray300',
    fontSize: '0.8rem'
  }
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

export const Label = styled('label', {
  marginBottom: '0.5rem',
  fontSize: '1rem',
  color: '$gray700',
});

export const ErrorMessage = styled('p', {
  marginTop: '0.25rem',
});