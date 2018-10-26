// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

import { Text } from '../primitives';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export const Label = styled(Text)`
  animation: ${({ animation }) => animation};
`;
Label.defaultProps = {
  as:            'label',
  display:       'block',
  color:         'hsla(var(--hsl-text), 0.75)',
  fontSize:      '1.25rem',
  lineHeight:    '3rem',
  textTransform: 'uppercase',
};