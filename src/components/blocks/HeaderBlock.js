// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { Header, Heading, Link, Nav, DesignModeToggleBlock } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function HeaderBlock({ header }) {
  return (
    <Header>
      <Heading fontSize="3rem">
        <Link to="/">mrozilla</Link>
      </Heading>
      <Nav>
        <Nav.List>
          {header.map(item => (
            <Nav.List.Item>
              <Link to={item.url} type="primary">
                {item.text}
              </Link>
            </Nav.List.Item>
          ))}
        </Nav.List>
      </Nav>
      <DesignModeToggleBlock />
    </Header>
  );
}
