// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Alert, Text } from '~components';
import { renderBlocks, parseLinks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const GoogleTitle = styled.h1`
  font-family: arial;
  font-size: 18px;
  line-height: 1.2;
  color: #1a0dab;
  margin: 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  outline: none;
`;

const GoogleWebsite = styled.cite`
  display: block;
  font-family: arial;
  color: #006621;
  font-size: 14px;
  line-height: 16px;
  font-style: normal;
  outline: none;

  &::after {
    content: '▾';
    padding-left: 1rem;
  }
`;

const GoogleDescription = styled.span`
  display: block;
  font-family: arial;
  color: #545454;
  font-size: 13px;
  line-height: 1.4;
  outline: none;
`;

const GoogleRatingStars = styled.span`
  display: block;
  font-size: 13px;
  line-height: 1;
  color: #e97100;
  outline: none;
`;

const copy = {
  error: {
    titleTooShort:
      'Your title is too short, try aiming for ~50 characters in total to [fully utilise the available space](https://support.google.com/webmasters/answer/35624)',
    titleTooLong:
      "Your title is too long, it's generally smart to stay under 60 characters in total as [Google truncates titles at 600px width (on desktop)](https://moz.com/learn/seo/title-tag)",
    descriptionTooShort:
      'Your description is too short, try aiming for ~100 characters to [provide more information to the users](https://support.google.com/webmasters/answer/35624)',
    descriptionTooLong:
      'Your description is too long, you generally want to stay under 300 characters in total to avoid [Google truncating your description](https://moz.com/learn/seo/meta-description)',
  },
  success: "Everything's looking good!",
};

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/serp-preview/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          title
          codeLink
          type
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function SearchSnippetPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const [errors, setErrors] = useState({
    titleTooShort: false,
    titleTooLong: false,
    descriptionTooShort: false,
    descriptionTooLong: false,
  });

  const handleTitleChange = ({ target }) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      titleTooShort: target.textContent.length < 30,
      titleTooLong: target.textContent.length > 60,
    }));
  };

  const handleDescriptionChange = ({ target }) => {
    setErrors((prevErrors) => ({
      ...prevErrors.isError,
      descriptionTooShort: target.textContent.length < 70,
      descriptionTooLong: target.textContent.length > 160,
    }));
  };

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'snippet' 'errors';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: snippet;
            max-width: 600px;
          `}
        >
          <GoogleTitle onInput={handleTitleChange} contentEditable>
            Google SERP preview visual optimiser | mrozilla
          </GoogleTitle>
          <GoogleWebsite contentEditable>https://www.mrozilla.cz/lab/serp-preview</GoogleWebsite>
          <GoogleRatingStars>
            ★★★★★
            <Text
              css={`
                color: #808080;
                line-height: 18px;
              `}
            >
              {' '}
              Rating: 4.7 - 6 reviews
            </Text>
          </GoogleRatingStars>
          <GoogleDescription onInput={handleDescriptionChange} contentEditable>
            Click to edit the fields directly to optimise the length of your website&apos;s titles
            and descriptions for Google search snippets visually with hints
          </GoogleDescription>
        </Section>
        <Section
          css={`
            grid-area: errors;
          `}
        >
          {Object.entries(errors).map(
            ([errorType, isError]) =>
              isError && (
                <Alert key={errorType} type="danger">
                  {parseLinks(copy.error[errorType], { type: 'primary' })}
                </Alert>
              ),
          )}
          {Object.values(errors).every((isError) => !isError) && (
            <Alert type="success">{copy.success}</Alert>
          )}
        </Section>
      </Main>
    </RootContainer>
  );
}

SearchSnippetPage.propTypes = pagePropTypes;
