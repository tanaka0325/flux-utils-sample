import React from 'react';
import { render } from 'react-dom';

import TodoContainer from './components/TodoContainer';

render(
  <TodoContainer />,
  document.getElementById('content')
);
