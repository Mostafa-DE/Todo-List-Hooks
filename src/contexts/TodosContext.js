import React, { createContext } from 'react';
import useTodoState from '../hooks/UseTodoState';
// const defaultTodos = [
//     {id: 1, task: studying, completed: false},
//     {id: 2, task: cooding, completed: true}
// ];

export const TodosContext = createContext();

export default function TodosProvider(props) {
    const { todos, addTodo, removeTodo, isCompletedTodo, editTodo, onSortEnd } = useTodoState("");
    return (
        <TodosContext.Provider value={{todos, addTodo, removeTodo, isCompletedTodo, editTodo, onSortEnd}}>
            {props.children}
        </TodosContext.Provider>
    );


}
