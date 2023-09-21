import { styled } from ".."
import { blackA } from '@radix-ui/colors';
import * as Switch from '@radix-ui/react-switch';

export const WrapperContainerStep2 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const FormDiv = styled('div', {
  width: '100%',
  p: {
    color: '$gray300',
    fontSize: '0.8rem',
  }
});

export const CardBox = styled('div', {
  width: '100%',
});

export const CardSelectPlan = styled('div', {
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
  }
})


export const SwitchBox = styled('div', {
  backgroundColor: '$magnolia',
  padding: '0.8rem',
  display: 'flex',
  alignItems: 'center',
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

export const Flex = styled('div', { display: 'flex' });
export const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
});
