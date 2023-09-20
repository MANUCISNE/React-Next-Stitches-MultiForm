import { styled } from ".."

export const WrapperContainerStep1 = styled('div', {

});

export const FormDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '3.5rem',
  gap: '1rem',
  justifyContent: 'flex-end',

  p: {
    color: '$gray300',
    fontSize: '0.8rem'
  }
});



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