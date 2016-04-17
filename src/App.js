import { render } from 'react-dom';
import React from 'react';
import { base as button, primary as buttonPrimary } from './styles/button';
import { lead as paragraphLead } from './styles/typography';

const App = () => (
  <div>
    <p className={paragraphLead}>
      Lorem ipsum dolor sit amet
    </p>
    <button className={`${button} ${buttonPrimary}`}>
      Button
    </button>
  </div>
);

render(<App />, document.getElementById('main'));
