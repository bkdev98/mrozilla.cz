// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '~components/primitives/Text';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Radio = styled.input.attrs({ type: 'radio' })`
  --shadow: inset 0 0 0 1px hsla(var(--hsl-text), 0.25);

  appearance: none;
  outline: none;
  border: none;

  margin: 0 1rem 0 0;

  cursor: pointer;
  font-size: 2rem;
  width: 1em;
  height: 1em;
  background-color: hsla(var(--hsl-text), 0.05);
  box-shadow: var(--shadow);
  border-radius: 50%;

  & ~ ${Text} {
    cursor: pointer;
    font-size: 2rem;
    text-transform: initial;
    color: hsla(var(--hsl-text), 0.5);
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      box-shadow: inset 0 0 0 1px var(--color-info);

      & ~ ${Text} {
        color: var(--color-text);
      }
    }

    &:checked {
      box-shadow: inset 0 0 0 0.3em var(--color-info);

      & ~ ${Text} {
        color: var(--color-text);
      }
    }
  }
`;
