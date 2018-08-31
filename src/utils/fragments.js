// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { graphql } from 'gatsby';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

// separate due to being used in other fragments
export const OgImageFragment = graphql`
  fragment OgImageFragment on File {
    childImageSharp {
      resize(width: 1200, height: 630) {
        src
      }
    }
  }
`;

export const fragments = graphql`
  fragment MetaFragment on PagesJson {
    meta {
      title
      description
      ogImage {
        ...OgImageFragment
      }
    }
  }

  fragment WorkFragment on WorkJson {
    meta {
      permalink
    }
    body {
      title
      tagline
    }
  }

  fragment LabFragment on LabJson {
    meta {
      type
      permalink
    }
    body {
      title
      tagline
    }
  }

  fragment BlogPreviewFragment on MarkdownRemark {
    timeToRead
    frontmatter {
      permalink
      title
      date(formatString: "MMMM D, YYYY")
    }
  }
`;