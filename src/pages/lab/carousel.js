// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Carousel, Img, H1 } from '~components';
import { renderBlocks } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/carousel/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CarouselPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main gridTemplate="'hero' 'carousel'" gridGap="10vh 1rem">
        {renderBlocks(blocks)}
        <Section gridArea="carousel">
          <Carousel loop={{ interval: 5000 }}>
            {Array.from({ length: 15 }, (_, i) => i).map(order => (
              <Fragment key={order}>
                <Img src="https://source.unsplash.com/random/400x400" alt="a random photo" />
                <H1 as="h2" fontSize="2.25rem" lineHeight="4rem">
                  Photo #{order + 1}
                </H1>
              </Fragment>
            ))}
          </Carousel>
        </Section>
      </Main>
    </RootContainer>
  );
}