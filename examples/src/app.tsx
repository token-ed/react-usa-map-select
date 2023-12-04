import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { USAMapSelect } from '../../src';

export const App = () => {
  return (
    <BrowserRouter basename="react-usa-map-select">
      <AppDesktop />
    </BrowserRouter>
  );
};

export const AppDesktop: React.FC = () => (
  <USAMapSelect
    USAStateOnHoverColor="slate"
    showStateNameOnHover
    onClick={event => alert(event.currentTarget.getAttribute('name'))}
  />
);
