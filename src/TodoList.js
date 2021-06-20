import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList({todos, removeTodo, isCompletedTodo, editTodo}) {
    if(todos.length)
    return (
        <Paper>
            <List>
                {todos.map( (todo, i) => (
                <>
                    <Todo 
                        {...todo} // id and completed and task
                        key={todo.id}
                        removeTodo={removeTodo}
                        isCompletedTodo={isCompletedTodo}
                        editTodo={editTodo}

                    />
                    { i < todos.length - 1 ? <Divider /> : ""}
                </>
                ))}
            </List>

        </Paper>
    );
    return null;
}

export default TodoList;
