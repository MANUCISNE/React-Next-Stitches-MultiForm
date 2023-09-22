import * as Checkbox from '@radix-ui/react-checkbox';
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

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: violet.violet11,
});

export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  width: '100%',
  gap: '2rem',
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
