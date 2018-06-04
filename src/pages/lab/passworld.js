// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

// react
import React, { Component } from 'react';

// components
import {
  Main,
  Section,
  Heading,
  Text,
  Input,
  Checkbox,
  Button,
  Popup,
} from '../../components';
import { copyToClipboard, parseInput } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class PassworldScreen extends Component {
  state = {
    password: '',
    length:   10,
    chars:    {
      lowerChars:   true,
      upperChars:   true,
      numbers:      false,
      specialChars: false,
    },
    clipboard: false,
  };

  componentDidMount = () => {
    this.handleGeneratePassword();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.length !== prevState.length ||
      this.state.chars.lowerChars !== prevState.chars.lowerChars ||
      this.state.chars.upperChars !== prevState.chars.upperChars ||
      this.state.chars.numbers !== prevState.chars.numbers ||
      this.state.chars.specialChars !== prevState.chars.specialChars
    ) {
      this.handleGeneratePassword();
    }
  };

  handleGenerateRandomCharacter = () => {
    const types = {
      lowerChars:   'abcdefghijklmnopqrstuvwxyz',
      upperChars:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      specialChars: '@#$%-_',
      numbers:      '0123456789',
    };
    const pool = Object.keys(types)
      .map(key => (this.state.chars[key] ? types[key] : null))
      .join('');
    const seed = window.crypto.getRandomValues(new Uint8Array(1));
    return pool.charAt(seed[0] % pool.length);
  };
  handleGeneratePassword = () => {
    this.setState({
      password: Array(...new Array(this.state.length))
        .map(() => this.handleGenerateRandomCharacter())
        .join(''),
    });
  };

  handleCopyToClipboard = () => {
    this.setState({
      clipboard: copyToClipboard(this.state.password),
    });
    this.forceUpdate();
  };

  renderOutputs = () =>
    [
      {
        type:        'text',
        name:        'password',
        value:       this.state.password,
        label:       'Generated password',
        readOnly:    true,
        renderRight: () => (
          <Text
            onClick={this.handleCopyToClipboard}
            style={{ cursor: 'pointer' }}
          >
            <span role="img" aria-label="clipboard">
              📋
            </span>
          </Text>
        ),
      },
    ].map(output => <Input key={output.name} {...output} />);
  renderInputs = () =>
    [
      {
        type:        'number',
        name:        'length',
        value:       this.state.length,
        label:       'Password length',
        description:
          "Don't go for any password that is shorter than 10 characters. Sh*t's not safe that way.",
        marginBottom: '2rem',
        onChange:     ({ target }) => this.setState({ ...parseInput(target) }),
      },
    ].map(input => <Input key={input.name} {...input} />);
  renderCheckboxes = () =>
    [
      {
        name:  'lowerChars',
        label: 'Include lowercase letters',
      },
      {
        name:  'upperChars',
        label: 'Include uppercase letters',
      },
      {
        name:  'specialChars',
        label: 'Include special characters',
      },
      {
        name:  'numbers',
        label: 'Include numbers',
      },
    ].map(input => (
      <Checkbox
        key={input.name}
        {...input}
        checked={this.state.chars[input.name]}
        onChange={({ target }) =>
          this.setState({
            chars: { ...this.state.chars, ...parseInput(target) },
          })
        }
      />
    ));
  renderButtons = () =>
    [
      {
        title:    'Generate password',
        onClick:  this.handleGeneratePassword,
        disabled: Object.values(this.state.chars).every(item => item === false),
      },
      {
        title:   'Copy to clipboard',
        onClick: this.handleCopyToClipboard,
      },
    ].map(button => (
      <Button key={button.title} {...button} margin="1rem 0 0 0">
        {button.title}
      </Button>
    ));

  render() {
    return (
      <Main gridTemplateColumns="1fr 2fr 1fr" gridTemplateAreas="'. output .'">
        <Section gridArea="output">
          {this.renderOutputs()}
          {this.renderInputs()}
          {this.renderCheckboxes()}
          {this.renderButtons()}
        </Section>
        {this.state.clipboard === this.state.password && (
          <Popup key={window.performance.now()} top="auto" bottom="0">
            {this.state.clipboard} was copied to clipboard!
          </Popup>
        )}
      </Main>
    );
  }
}