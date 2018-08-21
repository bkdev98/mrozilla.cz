// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';

import { Main, Section, Input } from '../../components';
import { SEOContainer, HeroContainer } from '../../containers';
import { parseInput } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  query InAnyCasePage {
    labJson(meta: { permalink: { eq: "/lab/in-any-case" } }) {
      meta {
        title
        description
      }
      body {
        title
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class InAnyCasePage extends PureComponent {
  state = {
    input:  '',
    output: {
      lowerCase:    '',
      upperCase:    '',
      titleCase:    '',
      sentenceCase: '',
      dotCase:      '',
      URLCase:      '',
      pathCase:     '',
      snakeCase:    '',
      constantCase: '',
      headerCase:   '',
      pascalCase:   '',
      camelCase:    '',
    },
  };

  handleInput = ({ target }) => {
    const changeCase = {
      toLowerCase: s => s.toLowerCase(),
      toUpperCase: s => s.toUpperCase(),
      toTitleCase: s => s
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join(' '),
      toSentenceCase: s => s
        .split('. ')
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join('. '),
      toDotCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('.'),
      toURLCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('-'),
      toPathCase: s => s
        .split(' ')
        .map(w => changeCase.toLowerCase(w))
        .join('/'),
      toSnakeCase: s => s
        .split(' ')
        .map(t => changeCase.toLowerCase(t))
        .join('_'),
      toConstantCase: s => s
        .split(' ')
        .map(w => changeCase.toUpperCase(w))
        .join('_'),
      toHeaderCase: s => s
        .split(' ')
        .map(t => changeCase.toSentenceCase(t))
        .join('-'),
      toPascalCase: s => s
        .split(' ')
        .map(w => changeCase.toSentenceCase(w))
        .join(''),
      toCamelCase: s => changeCase
        .toPascalCase(s)
        .charAt(0)
        .toLowerCase() + changeCase.toPascalCase(s).slice(1),
      reset: () => this.state.original,
    };

    this.setState(prevState => ({
      ...parseInput(target),
      output: {
        ...prevState.output,
        lowerCase:    changeCase.toLowerCase(target.value),
        upperCase:    changeCase.toUpperCase(target.value),
        titleCase:    changeCase.toTitleCase(target.value),
        sentenceCase: changeCase.toSentenceCase(target.value),
        dotCase:      changeCase.toDotCase(target.value),
        URLCase:      changeCase.toURLCase(target.value),
        pathCase:     changeCase.toPathCase(target.value),
        snakeCase:    changeCase.toSnakeCase(target.value),
        constantCase: changeCase.toConstantCase(target.value),
        headerCase:   changeCase.toHeaderCase(target.value),
        pascalCase:   changeCase.toPascalCase(target.value),
        camelCase:    changeCase.toCamelCase(target.value),
      },
    }));
  };

  render() {
    return (
      <Main gridTemplate="'hero' 'input'" gridGap="5vh 4rem">
        <SEOContainer seo={this.props.data.labJson.meta} />
        <HeroContainer title={this.props.data.labJson.body.title} />
        <Section gridArea="input">
          <Input
            name="input"
            type="text"
            value={this.state.input}
            placeholder="Start typing or paste text..."
            padding="2rem 1rem"
            margin="0 0 2rem 0"
            onChange={this.handleInput}
          />
          {Object.entries(this.state.output).map(([key, value]) => (
            <Input {...{ key }} placeholder={key} name={key} type="text" value={value} readOnly />
          ))}
        </Section>
      </Main>
    );
  }
}
