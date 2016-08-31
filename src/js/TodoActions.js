import { dispatch } from './TodoDispatcher';

const Actions = {
  addTodo: (text) => {
    dispatch({
      type: 'ADD_TODO',
      text,
    });
  },
};

export default Actions;
