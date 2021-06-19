import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/dist/v4';


function TodoApp() {
    const initialTodos = [
        {id: 1, task: "studying", completed: false},
        {id: 2, task: "coding", completed: true},
        {id: 3, task: "reading", completed: false}
    ];

    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
    };

    const removeTodo = (todoId) => {
        // filter out remove todo
        const updateTodos = todos.filter( todo => todo.id !== todoId);
        // call setTodos with new todos
        setTodos(updateTodos);
    };

    const isCompletedTodo = todoId => {
        const updateTodo = todos.map( todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        );
        setTodos(updateTodo);
    }   

    return (
        <Paper style={{padding: 0, margin: 0, height: "100vh", backgroundColor: "#fafafa"}}>
            <AppBar position="static" style={{height: "64px", backgroundColor: "#42a5f5"}}>
                <Toolbar>
                    <Typography style={{fontSize: "2rem"}} color="inherit">To-do List  <span style={{color:"red", fontSize: "1.1rem", fontFamily: "cursive"}}>By Mostaf Fayyad</span> </Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "2rem"}}>
                <Grid item xs={10} md={6} lg={3}>
                    <TodoForm addTodo={addTodo} />
                    <TodoList todos={todos} removeTodo={removeTodo} isCompletedTodo={isCompletedTodo} />
                </Grid>

            </Grid>

        </Paper>
    );
}

export default TodoApp;

/* 
-TodoApp
 -TodoForm => (to make new todo)
 -TodoList => (contain all Todo element)
  -TodoItem => (the todo element itself)

*/ 
