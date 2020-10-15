import * as Types from './actionTypes';

const init = {
    todos: [],
}

export default function todoReducer(state = init, {type, payload}) {
    switch(type){
        case Types.ADD: return addTodo(state, payload);
        case Types.REMOVE: return removeTodo(state, payload);
        case Types.STATUS: return switchStatus(state, payload);
        default: return state
    }
}

function addTodo(state, {title}){
    const todo = {
        id: uuidv4(),
        title,
        status: 'pending'
    };

    return {...state, todos: [...state.todos, todo]};
}

function removeTodo(state, {id}) {
    const tmpArr = [...state.todos];
    const index = tmpArr.findIndex(todo => todo.id === id);
    tmpArr.splice(index, 1);
    return {...state, todos: [...tmpArr]};
}

function switchStatus(state, {todo}) {
    const tmpArr = [...state.todos];
    const index = tmpArr.findIndex(t => t.id === todo.id);
    tmpArr[index] = todo;
    return {...state, todos: [...tmpArr]};
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


