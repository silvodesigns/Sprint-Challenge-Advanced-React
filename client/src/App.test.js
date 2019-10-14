import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


it('the app element has been rendered', () => {
  const wrapper = render(
    <App/>
  )
  console.log(wrapper.debug())
});
