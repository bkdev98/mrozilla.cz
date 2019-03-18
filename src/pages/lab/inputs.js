// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { RootContainer, SEOContainer, HeroContainer } from '~containers';
import { Main, Form, H1, Input } from '~components';

// ─────────────────────────────────────────────────────────────────────────────
// query
// ─────────────────────────────────────────────────────────────────────────────

export const query = graphql`
  {
    page: labJson(meta: { permalink: { eq: "/lab/inputs/" } }) {
      meta {
        title
        description
        permalink
        ogImage {
          ...OgImageFragment
        }
      }
      body {
        hero {
          title
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

export default function InputsPage({
  data: {
    page: {
      meta,
      body: { hero },
    },
  },
}) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all?fields=name')
      .then(res => res.json())
      .then(data => setCountries(
        data.map(country => ({
          value: country.alpha2Code,
          name:  country.name,
        })),
      ));
  }, []);

  const renderTextInputs = () => (
    <Form
      gridArea="text"
      gridTemplate="'title' 'text' 'pattern' 'email' 'password' 'number' 'website' 'date' 'time'"
    >
      <H1 gridArea="title">Text inputs</H1>
      <Input name="text" type="text" placeholder="First name" label="Generic text input" required />
      <Input
        name="pattern"
        type="text"
        placeholder="Username"
        label="Text input with pattern validation"
        description="Choose a username with at least 3 lowercase or uppercase letters"
        error="Choose a username with at least 3 lowercase or uppercase letters"
        pattern="^[A-Za-z]{3,15}$"
        required
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        label="Email input with validation"
        error="Your email should be in the format of name@example.com"
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        label="Password input with validation"
        error="Your password has to contain at least 8 letters or numbers"
        pattern="^[A-Za-z0-9]{8,99}$"
        required
      />
      <Input
        name="number"
        type="number"
        placeholder="GPA"
        label="Number input with min, max, step, and validation"
        error="Your GPA has to be between 0.0 and 4.0 with one decimal at most"
        min="0"
        max="4"
        step="0.1"
        required
      />
      <Input
        name="website"
        type="url"
        placeholder="Website"
        label="URL field with pre-filled content and validation"
        error="Your website should be in the format of https://example.com"
        pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$"
        required
      />
    </Form>
  );

  const renderTimeInputs = () => (
    <Form gridArea="time" gridTemplate="'title' 'date' 'datetime-local' 'month' 'time'">
      <H1 gridArea="title">Date inputs</H1>
      <Input
        name="date"
        type="date"
        placeholder="Date"
        label="Date field with a custom placeholder"
        required
      />
      <Input
        name="datetime-local"
        type="datetime-local"
        placeholder="Date & time"
        label="Datetime field with a custom placeholder"
        required
      />
      <Input
        name="month"
        type="month"
        placeholder="Month"
        label="Month field with a custom placeholder"
        required
      />
      <Input
        name="time"
        type="time"
        placeholder="Time"
        label="Time field with a custom placeholder"
        required
      />
    </Form>
  );

  const renderSelects = () => (
    <Form gridArea="select" gridTemplate="'title' 'select' 'search'">
      <H1 gridArea="title">Select inputs</H1>
      <Input
        name="select"
        type="select"
        placeholder="Gender"
        label="Select input with placeholder"
        options={[
          {
            value: 'Male',
            label: 'Male',
          },
          {
            value: 'Female',
            label: 'Female',
          },
          {
            value: 'Other',
            label: 'Other',
          },
        ]}
        required
      />
      <Input
        name="search"
        type="search"
        placeholder="Country"
        label="Select input with search and filtering"
        error="Please choose one of the options"
        options={countries}
        required
      />
    </Form>
  );

  const renderCheckboxes = () => (
    <Form gridArea="checkbox" gridTemplate="'title' 'checkbox'">
      <H1 gridArea="title">Checkbox inputs</H1>
      <Input
        name="checkbox"
        type="checkbox"
        label="Interests"
        options={[
          {
            value: 'music',
            label: 'Music',
          },
          {
            value: 'travelling',
            label: 'Travelling',
          },
          {
            value: 'friends',
            label: 'Friends',
          },
        ]}
      />
    </Form>
  );

  const renderRadios = () => (
    <Form gridArea="radio" gridTemplate="'title' 'radio'">
      <H1 gridArea="title">Radio inputs</H1>
      <Input
        name="radio"
        type="radio"
        label="Marital status"
        options={[
          {
            value: 'single',
            label: 'Single',
          },
          {
            value: 'married',
            label: 'Married',
          },
          {
            value: 'widowed',
            label: 'Widowed',
          },
          {
            value: 'divorced',
            label: 'Divorced',
          },
        ]}
      />
    </Form>
  );

  return (
    <RootContainer>
      <SEOContainer meta={meta} />
      <Main
        gridTemplate={{
          xs: "'hero' 'text' 'time' 'select' 'checkbox' 'radio'",
          md: "'hero hero' 'text .' 'time .' 'select .' 'checkbox .' 'radio .' / 1fr 1fr",
        }}
        gridGap="10vh 1rem"
      >
        <HeroContainer title={hero.title} />
        {renderTextInputs()}
        {renderTimeInputs()}
        {renderSelects()}
        {renderCheckboxes()}
        {renderRadios()}
      </Main>
    </RootContainer>
  );
}
