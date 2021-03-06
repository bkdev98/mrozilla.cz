// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer } from '~containers';
import { Main, Section, Table, Link, Button, Modal, H2, P } from '~components';
import { renderBlocks, pagePropTypes } from '~utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: mdx(frontmatter: { meta: { permalink: { eq: "/lab/czerman/" } } }) {
      frontmatter {
        ...MetaFragment
        blocks {
          type
          title
          codeLink
          items {
            czech {
              grammar
              ipa
            }
            german {
              grammar
              ipa
            }
          }
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function CzermanPage({
  data: {
    page: {
      frontmatter: { meta, blocks },
    },
  },
}) {
  const { items: dictionary } = blocks[1];
  const [state, setState] = useState({
    openTermId: '',
    isOpenAll: false,
    isModalOpen: false,
    isCardFlipped: false,
  });

  const handleOpenTerm = (openTermId) => {
    setState({ ...state, isOpenAll: false, openTermId });
  };

  const handleOpenAll = () => {
    setState((prevState) => ({ ...prevState, isOpenAll: !prevState.isOpenAll }));
  };

  const handleNextTerm = () => {
    setState((prevState) => {
      const currentIndex = dictionary.findIndex(
        (term) => term.czech.grammar === prevState.openTermId,
      );
      return {
        ...prevState,
        isModalOpen: true,
        isCardFlipped: false,
        openTermId: dictionary[(currentIndex + 1) % dictionary.length].czech.grammar,
      };
    });
  };

  const handleModal = () => {
    setState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const handleFlipCard = () => {
    setState((prevState) => ({
      ...prevState,
      isCardFlipped: !prevState.isCardFlipped,
    }));
  };

  const renderModal = () => {
    const modalTerm =
      dictionary.find((term) => term.czech.grammar === state.openTermId) || dictionary[0];
    return (
      <Modal
        innerKey={modalTerm.czech.grammar}
        isOpen={state.isModalOpen}
        innerPadding="4rem 4rem 2rem 4rem"
        innerMinWidth="15vw"
        onClickBackground={handleModal}
        onClickClose={handleModal}
        onClickEscape={handleModal}
      >
        <H2>Czech</H2>
        <P>{modalTerm.czech.grammar}</P>
        <H2>
          Czech{' '}
          <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech" look="secondary">
            IPA
          </Link>
        </H2>
        <P>{modalTerm.czech.ipa}</P>
        <H2>German equivalent</H2>
        <P>{state.isCardFlipped ? modalTerm.german.grammar : '...'}</P>
        <H2>
          German{' '}
          <Link to="https://en.wikipedia.org/wiki/Help:IPA/German" look="secondary">
            IPA
          </Link>
        </H2>
        <P>{state.isCardFlipped ? modalTerm.german.ipa : '...'}</P>
        <Button
          look="primary"
          css={`
            margin: 4rem 0 0 0;
            width: 100%;
          `}
          onClick={state.isCardFlipped ? handleNextTerm : handleFlipCard}
        >
          {state.isCardFlipped ? 'Next' : 'Reveal'}
        </Button>
      </Modal>
    );
  };

  const renderTable = () => (
    <Table
      css={`
        margin: 0 0 2rem 0;

        @media screen and (min-width: 1200px) {
          table-layout: fixed;
        }
      `}
    >
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Czech</Table.Th>
          <Table.Th>
            Czech{' '}
            <Link to="https://en.wikipedia.org/wiki/Help:IPA/Czech" look="secondary">
              IPA
            </Link>
          </Table.Th>
          <Table.Th>German equivalent</Table.Th>
          <Table.Th>
            German{' '}
            <Link to="https://en.wikipedia.org/wiki/Help:IPA/German" look="secondary">
              IPA
            </Link>
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {dictionary.map((term) => (
          <Table.Tr
            key={term.czech.grammar}
            css={`
              cursor: pointer;
            `}
            onClick={() =>
              handleOpenTerm(state.openTermId !== term.czech.grammar ? term.czech.grammar : '')
            }
          >
            <Table.Td>{term.czech.grammar}</Table.Td>
            <Table.Td>{term.czech.ipa}</Table.Td>
            {state.openTermId === term.czech.grammar || state.isOpenAll ? (
              <Table.Td>{term.german.grammar}</Table.Td>
            ) : (
              <Table.Td
                colSpan="2"
                css={`
                  textalign: center;
                  opacity: 0.5;
                `}
              >
                Reveal
              </Table.Td>
            )}
            {state.openTermId === term.czech.grammar || state.isOpenAll ? (
              <Table.Td>{term.german.ipa}</Table.Td>
            ) : null}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        css={`
          grid-template: 'hero' 'practice' 'dictionary';
          grid-gap: 10vh 4rem;
        `}
      >
        {renderBlocks(blocks)}
        <Section
          css={`
            grid-area: practice;
          `}
        >
          <Button look="primary" onClick={handleNextTerm}>
            Start practice
          </Button>
          {renderModal()}
        </Section>
        <Section
          css={`
            grid-area: dictionary;
          `}
        >
          {renderTable()}
          <Button look="secondary" onClick={handleOpenAll}>
            {state.isOpenAll ? 'Hide' : 'Reveal'} all
          </Button>
        </Section>
      </Main>
    </RootContainer>
  );
}

CzermanPage.propTypes = pagePropTypes;
