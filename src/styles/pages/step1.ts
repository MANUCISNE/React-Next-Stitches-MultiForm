import { styled } from ".."

export const BoxContainerStep1 = styled('div', {
  
});

export const FormDivStep1 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
  marginBottom: '0.7rem',
  gap: '.5rem',

  p: {
    color: '$gray300',
    fontSize: '0.8rem'
  },

  '@media (max-width: 375px)': {
    width: '100%',
    marginTop: '2rem',

    p: {
      fontSize: '0.8rem'
    },
  },
});

export const InputField = styled('input', {
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
  outline: 'none',

  variants: {
    styleError: {
      true: {
        border: "2px solid red"
    }}
  },

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

export const ErrorMessageName = styled('p', {
  fontWeight: 'bold',
  position: 'absolute',
  marginLeft: '15rem',
  fontSize: '.78rem',
  marginTop: '4.5rem',
  width: '8rem',

  '@media (max-width: 375px)': {
    marginTop: '5.5rem',
    position: 'absolute',
    marginLeft: '6rem',
    width: '10rem',
    fontSize: '.78rem'
  },
});

export const ErrorMessageEmail = styled('p', {
  fontWeight: 'bold',
  marginTop: '9.5rem',
  position: 'absolute',
  marginLeft: '15rem',
  width: '8rem',

  '@media (max-width: 375px)': {
    marginTop: '10.4rem',
    position: 'absolute',
    marginLeft: '6rem',
    width: '10rem',
    fontSize: '.78rem'
  },
});

export const ErrorMessagePhone = styled('p', {
  fontWeight: 'bold',
  marginTop: '14.5rem',
  position: 'absolute',
  marginLeft: '11.5rem',
  width: '13rem',

  '@media (max-width: 375px)': {
    marginTop: '15.3rem',
    position: 'absolute',
    marginLeft: '2.5rem',
    width: '14rem',
    fontSize: '.78rem'
  },
});

