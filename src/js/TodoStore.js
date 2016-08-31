import { ReduceStore } from 'flux/utils';
import Dispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            text: action.text,
            completed: false,
          },
        ];
      default:
        return state;
    }
  }
}

export default new TodoStore(Dispatcher);
