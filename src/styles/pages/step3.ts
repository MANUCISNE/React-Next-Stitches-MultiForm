import { violet, blackA } from '@radix-ui/colors';
import { styled } from ".."

export const WrapperContainerStep3 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FormDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '1rem',
  gap: '1rem',
  
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
    marginTop: '1rem',

    p: {
      fontSize: '.8rem',
    },

    '@media (max-width: 375px)': {
      width: '17.5rem',
      marginBotton: '5rem'
    },

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

export const AddonsOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media (max-width: 375px)': {
    marginBottom: '4rem'
  },
})

export const Label = styled('label', {
  color: 'white',
  width: '18rem',
  fontSize: 15,
  lineHeight: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const Flex = styled('div', {
  display: 'flex',
  padding: '1rem',
  width: '100%',
  borderRadius: '6px',
  border: '1px solid $purplishBlue',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$magnolia',
  },

  '@media (max-width: 375px)': {
    padding: '.5rem',
  },
})

const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '1rem',
  height: '1rem',
  backgroundColor: '$magnolia', // Substitua pelo valor desejado
});

const CheckIcon = styled('div', {
  color: '$white', // Substitua pelo valor desejado
});