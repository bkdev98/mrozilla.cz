// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import { Wrapper, Header, Heading } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Heading>mrozilla</Heading>
      </Header>
      {children()}
    </Wrapper>
  );
}
