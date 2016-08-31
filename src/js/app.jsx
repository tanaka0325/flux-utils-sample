import React from 'react';
import { render } from 'react-dom';

import TodoApp from './TodoContainer';

render(
  <TodoApp />,
  document.getElementById('content')
);
