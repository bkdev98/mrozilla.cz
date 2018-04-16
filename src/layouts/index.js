// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import { Wrapper, HeaderBlock } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({ data: { menusJson: { header } }, children }) {
  return (
    <Wrapper>
      <HeaderBlock header={header} />
      {children()}
    </Wrapper>
  );
}

export const query = graphql`
  query Menus {
    menusJson {
      header {
        url
        text
      }
    }
  }
`;
