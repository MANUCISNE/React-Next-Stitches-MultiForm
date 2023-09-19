import { styled } from ".."
import { blackA } from '@radix-ui/colors';
import * as Switch from '@radix-ui/react-switch';

export const WrapperContainerStep2 = styled('div', {
  margin: 'auto',
  display: 'flex',
  padding: '2rem',
  background: '$white',
  height: '28rem',
  width: '48rem',
  borderRadius: '8px',
});

export const FormDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '8rem 5rem 1rem 6rem',
  gap: '1rem',
  justifyContent: 'flex-end',
});

export const ButtonNextStep2 = styled('button', {
  fontSize: '$geral',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '0.4rem',
  backgroundColor: '$marineBlue',
  color: 'white',
  textDecoration: 'none',
  minWidth: '8rem',
  maxWidth: '8rem',
  padding: '0.8rem 1.2rem',
})

export const DivTeste = styled('div', {
  border: '1px solid $lightGray',
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  cursor: 'pointer',
  padding: '1rem',

  '&:hover': {
    border: '1px solid $purplishBlue',
    backgroundColor: '$magnolia'
  }
})

export const CardDiv = styled('div', {
  display: 'flex',
  gap: '1rem',
});

export const SwitchBox = styled('div', {
  backgroundColor: '$magnolia',
  padding: '0.8rem',
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
  '&[data-state="checked"]': { backgroundColor: 'black' },
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
