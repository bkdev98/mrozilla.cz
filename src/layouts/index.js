// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import './index.css';

import { Wrapper, Header, Heading, Link } from '../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <Heading>mrozilla</Heading>
        </Link>
      </Header>
      {children()}
    </Wrapper>
  );
}
