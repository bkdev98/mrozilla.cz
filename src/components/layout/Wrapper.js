// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import styled from 'styled-components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default styled.div`
  position: relative;
  display: grid;
  grid-gap: 10vh 1rem;
  grid-template-columns: 1fr 2fr 0.5fr;
  grid-template-areas: 'header main aside' 'header footer aside';
`;