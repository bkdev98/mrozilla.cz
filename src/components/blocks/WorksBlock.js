// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';

import { List, Title, Text, Link } from '../../components';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function WorksBlock({ works }) {
  return (
    <List gridGap="3rem">
      {works.map(({ permalink, title, tags }) => (
        <List.Item key={permalink}>
          <Title fontSize="3rem" lineHeight="4rem" fontWeight="700" margin="0">
            <Link to={permalink} type="primary">
              {title}
            </Link>
          </Title>
          <Text opacity="0.75" fontSize="1.5rem" lineHeight="2rem">
            {tags.join(', ')}
          </Text>
        </List.Item>
      ))}
    </List>
  );
}