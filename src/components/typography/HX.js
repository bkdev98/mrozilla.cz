// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import P from './P';

// ─────────────────────────────────────────────────────────────────────────────
// h1
// ─────────────────────────────────────────────────────────────────────────────

export const H1 = P.withComponent('h1');

H1.defaultProps = {
  ...P.defaultProps,
  fontSize:   '3rem',
  lineHeight: '4rem',
  margin:     '0 0 4rem 0',
};

// ─────────────────────────────────────────────────────────────────────────────
// h2
// ─────────────────────────────────────────────────────────────────────────────

export const H2 = P.withComponent('h2');

H2.defaultProps = {
  ...P.defaultProps,
  fontSize:      '1.25rem',
  fontWeight:    '300',
  lineHeight:    '3rem',
  margin:        '0',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
};

// ─────────────────────────────────────────────────────────────────────────────
// h3
// ─────────────────────────────────────────────────────────────────────────────

export const H3 = P.withComponent('h3');

H3.defaultProps = {
  ...P.defaultProps,
  fontSize:   '2.5rem',
  lineHeight: '2.5rem',
  margin:     '0 0 1rem 0',
};
