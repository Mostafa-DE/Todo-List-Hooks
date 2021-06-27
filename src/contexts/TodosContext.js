import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducer/todoReducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export default function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", [{id: 1, task: "cooding", completed: true}], todoReducer);
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );


}
