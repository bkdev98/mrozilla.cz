// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  --shadow: inset 0 0 0 2px hsla(var(--hsl-text), .1);

  appearance: none;
  outline: none;
  border: none;

  position: relative;
  margin: 0 1rem 0 0;

  cursor: pointer;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  background-color: hsla(var(--hsl-text), .05);
  box-shadow: var(--shadow);
  border-radius: .25em;

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), .5);
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: hsla(var(--hsl-brand-primary), .05);
      box-shadow: inset 0 0 0 2px var(--color-brand-primary);

      & ~ ${Text} {
        color: var(--color-text);
      }
    }

    &:checked {
      background-color: var(--color-brand-primary);

      &::after {
        content: '';
        display: block;
        width: .3em;
        height: .55em;
        border: solid var(--color-bg);
        border-width: 0 .125em .125em 0;
        transform: translate(.35em, .15em) rotate(45deg);
      }

      & ~ ${Text} {
        color: var(--color-text);
      }

      &:focus {
        box-shadow: 0 0 2px 0 var(--color-brand-primary);

        & ~ ${Text} {
          color: var(--color-brand-primary);
        }
      }
    }
  }
`;
