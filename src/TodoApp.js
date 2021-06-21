import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import UseTodoState from './hooks/UseTodoState';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoAppStyle';


function TodoApp({classes}) {
    const initialTodos = [{id: 1, task: "Cooding :)", completed: false}]
    const {todos, addTodo, removeTodo, isCompletedTodo, editTodo, onSortEnd} = UseTodoState(initialTodos);


    return (
        <Paper className={classes.root}>
            <AppBar position="static" className={classes.navAppBar}>
                <Toolbar>
                    <Typography 
                        className={classes.navBarText} 
                        color="inherit"
                    >
                        To-do List <span>By Mostaf Fayyad</span> 
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid 
                container 
                justify="center" 
                className={classes.gridContainer}
            >
                <Grid
                    item 
                    xs={10} 
                    md={6} 
                    lg={3}
                >
                    <TodoForm addTodo={addTodo} />
                    <TodoList 
                        todos={todos} 
                        editTodo={editTodo} 
                        removeTodo={removeTodo} 
                        isCompletedTodo={isCompletedTodo}
                        onSortEnd={onSortEnd}
                    />
                </Grid>

            </Grid>

        </Paper>
    );
}

export default withStyles(styles) (TodoApp);

/* 
-TodoApp
 -TodoForm => (to make new todo)
 -TodoList => (contain all Todo element)
  -TodoItem => (the todo element itself)

*/ 
