// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {
  string, func, bool, shape, oneOfType, number,
} from 'prop-types';

import Label from '../typography/Label';
import Text from '../typography/Text';

import { fadeUpAnimation } from '../../utils';

// ─────────────────────────────────────────────────────────────────────────────
// helpers
// ─────────────────────────────────────────────────────────────────────────────

const InputTooltip = styled.div`
  position: absolute;
  font-size: 1.5rem;
  line-height: 2rem;
  background-color: var(--color-info);
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  top: calc(100% + 1rem);

  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);

  transition: 100ms;

  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 1rem;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent transparent var(--color-info) transparent;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: ${({ width }) => width};
  box-shadow: 0 2px 0 -1px var(--color-grey-light);
  background-color: hsla(var(--hsl-grey), 0.1);

  &:hover,
  &:focus-within {
    box-shadow: 0 2px 0 -1px var(--color-grey);
    & ${InputTooltip} {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledInput = styled.input`
  outline: 0;
  border: 0;
  flex: 1;
  padding: ${({ padding = '1rem' }) => padding};
  background-color: transparent;

  &::placeholder {
    opacity: 0.5;
  }
`;

const StyledTextArea = StyledInput.withComponent('textarea');

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default class Input extends PureComponent {
  static propTypes = {
    value:       oneOfType([string, number]).isRequired,
    name:        string.isRequired,
    type:        string,
    label:       string,
    margin:      string,
    description: string,
    labelStyle:  shape({
      isFloating: bool,
    }),
    renderLeft:  func,
    renderRight: func,
  };

  static defaultProps = {
    type:        'text',
    label:       null,
    margin:      '0 0 1rem 0',
    description: null,
    labelStyle:  {
      isFloating: false,
    },
    renderLeft:  () => null,
    renderRight: () => null,
  };

  renderLabel = () => {
    if (this.props.labelStyle.isFloating && this.props.value !== '') {
      return (
        <Label
          htmlFor={this.props.name}
          position="absolute"
          animation={`${fadeUpAnimation} 250ms both`}
          {...this.props.labelStyle}
        >
          {this.props.label}
        </Label>
      );
    }
    if (!this.props.labelStyle.isFloating) {
      return (
        <Label htmlFor={this.props.name} {...this.props.labelStyle}>
          {this.props.label}
        </Label>
      );
    }
    return null;
  };

  renderDescription = () => <InputTooltip>{this.props.description}</InputTooltip>;

  renderError = () => <Text>Error</Text>; // TODO: finalise

  renderInput = () => {
    if (this.props.type === 'textarea') {
      return <StyledTextArea {...this.props} />;
    }
    return (
      <StyledInput
        padding={
          this.props.labelStyle.isFloating && this.props.value !== ''
            ? '2.5rem 1rem 0.5rem 1rem'
            : '1.5rem 1rem'
        }
        {...this.props}
      />
    );
  };

  render() {
    return (
      <div style={{ gridArea: this.props.name, margin: this.props.margin }}>
        {this.props.label && this.renderLabel()}
        <InputWrapper>
          {this.props.renderLeft()}
          {this.renderInput()}
          {this.props.renderRight()}
          {this.props.description && this.renderDescription()}
        </InputWrapper>
        {this.props.error && this.renderError()}
      </div>
    );
  }
}
