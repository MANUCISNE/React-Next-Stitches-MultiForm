import { styled } from ".."

export const WrapperContainerStep4 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1rem'
});

export const FormDivStep4 = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
  gap: '1rem',
  width: '25rem',
  
  p: {
    color: '$gray800',
    margin: '.1rem',
    fontSize: '.7rem',
  },

  '@media (max-width: 375px)': {
    gap: '.5rem',
    paddingLeft: '.5rem',
    paddingRight: '.8rem',
    margin: '-0.5rem',

    p: {
      fontSize: '.8rem',
    }
  },
});

export const DivTeste = styled('div', {
  border: '1px solid $lightGray',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  width: '8rem',
  borderRadius: '4px',
  gap: '1rem',
  cursor: 'pointer',

  '&:hover': {
    border: '1px solid $purplishBlue',
    backgroundColor: '$magnolia'
  },
})

export const TextResumStep4 = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const FirstBoxResumStep4 = styled('div', {
  display: 'flex',
  padding: '1rem',
  width: '100%',
  borderRadius: '6px',
  backgroundColor: '$magnolia',
  flexDirection: 'column',

  '@media (max-width: 375px)': {
    padding: '.5rem',
  },
})

export const PlanTypeContainer = styled('div', {
  display: 'flex',
  width: '100%',
  marginBottom: '1rem',
  justifyContent: 'space-between'
})

export const AdditionalContainer = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
})

export const TotalPlansCalculate = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  width: '100%',
  gap: '2rem',
  borderRadius: '6px',

  '@media (max-width: 375px)': {
    padding: '.5rem',
  },
})

export const ConfirmButton = styled('button', {
  position: 'absolute',
  fontSize: '$geral',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.4rem',
  backgroundColor: 'blue',
  color: '$white',
  minWidth: '8rem',
  maxWidth: '8rem',
  padding: '0.8rem 1.2rem',
  marginTop: '24rem',
  marginLeft: '26rem',

  '@media (max-width: 375px)': {
    marginLeft: '10rem',
    marginTop: '34.5rem',
    padding: '0.8rem 0.8rem',
  },
})
