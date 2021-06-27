import uuid from 'uuid/dist/v4';
import { arrayMove } from "react-sortable-hoc";

const reducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return [...state, {id: uuid(), task: action.task, completed: false}];
        case "removeTodo":
            return state.filter( todo => todo.id !== action.id);
        case "isCompletedTodo":
            return state.map( todo => 
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        case "editTodo":
            return state.map( todo => 
                todo.id === action.id ? {...todo, task: action.newTask} : todo
            );
        case "onSortEnd":
            return ({ oldIndex, newIndex }) => arrayMove(state, oldIndex, newIndex); 

        default:
            return state;
    }
}

export default reducer;