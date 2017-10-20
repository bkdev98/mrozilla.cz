// =============================================================================
// Import
// =============================================================================

// React
import React from 'react';

// Styles
import { Section, Container, Row, Column } from '../components/Layout';
import { Text } from '../components/Typography';
import { Wiggle, Reveal } from '../components/Effects';
import HeroContainer from '../containers/HeroContainer';

// Content
import { about } from '../utils/content';

// =============================================================================
// Component
// =============================================================================

export default function AboutScreen() {
  return (
    <main>
      <Section>
        <HeroContainer content={about.top} />
      </Section>
      <Section marginTop="-25vh" id="below">
        <Container>
          <Row>
            <Column lg="9">
              {about.text.map(item => (
                <Wiggle key={item.props.children}>
                  <Text marginBottom="6rem">
                    <Reveal delay="1000ms">{item}</Reveal>
                  </Text>
                </Wiggle>
              ))}
            </Column>
          </Row>
        </Container>
      </Section>
    </main>
  );
}
