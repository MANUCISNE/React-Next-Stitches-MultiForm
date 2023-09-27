import { styled } from ".."
import { blackA } from '@radix-ui/colors';
import * as Switch from '@radix-ui/react-switch';

export const WrapperContainerStep2 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FormDivListCheckBox = styled('div', {
  width: '100%',

  p: {
    color: '$gray300',
    fontSize: '.9rem',
    marginBottom: '.3rem'
  },

  '@media (max-width: 375px)': {
    height: '90%',
    gap: '.8rem',
    marginTop: '2rem',
  },
});

export const CardBox = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1rem',
  margin: '2rem 0',

  '@media (max-width: 375px)': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    gap: '1rem',
    margin: 'auto',
    borderRadius: '6px',
  }
})

export const CardSelectPlan = styled('div', {
  border: '1px solid $lightGray',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  width: '10rem',
  height: '10rem',
  borderRadius: '6px',
  gap: '1rem',
  cursor: 'pointer',

  h5: {
    marginTop: '1rem',
  },

  span: {
    fontSize: '0.8rem',
  },

  variants: {
    selected: {
      true: {
        border: '1px solid $purplishBlue',
        backgroundColor: '$magnolia'
      }
    }
  },

  '&:hover': {
    border: '1px solid $purplishBlue',
    backgroundColor: '$magnolia'
  },

  '@media (max-width: 375px)': {
    display: 'flex',
    flexDirection: 'row',
    width: '15rem', 
    height: '4rem',

    h5: {
      marginTop: "-0.4rem"
    },
  },
})

export const ContentTextMobile = styled('div', {
  '@media (max-width: 375px)': {
    display: 'flex',
    flexDirection: 'column',
  },
});

export const SwitchContainer = styled('div', {
  backgroundColor: '$magnolia',
  padding: '0.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media (max-width: 375px)': {
    marginTop: '1rem',
  },
});

export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: 'black' }
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

export const BoxSwitch = styled('div', { display: 'flex' });

export const TextBoxSwitch = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
});


