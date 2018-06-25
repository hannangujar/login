import React from 'react';
import ReactDOM from 'react-dom';
import App from './Myfile';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Myfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
