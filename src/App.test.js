import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Data from './data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App data={Data}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
