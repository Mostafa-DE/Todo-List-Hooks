import React, { useContext } from 'react'
// import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import { SortableContainer } from 'react-sortable-hoc';
import { TodosContext } from './contexts/TodosContext';


const TodoList = SortableContainer(() => {
    const todos = useContext(TodosContext);

    if(todos.length)
    return (
            <div>
            <List>
                {todos.map( (todo, i) => (
                <>
                    <Todo
                        index={i}
                        {...todo} // id and completed and task
                        
                    />
                    { i < todos.length - 1 ? <Divider /> : ""}
                </>
                ))}
            </List>
            </div>
       
    );
    return null;
})

export default TodoList;
