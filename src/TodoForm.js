import React from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Styles/TodoFormStyle';


function TodoForm({ addTodo , classes }) {
    const [value, handleChange, reset] = useInputState("");
    return (
        <Paper className={classes.root}>
            
         <form onSubmit={ (evnt) => {
             evnt.preventDefault();
             addTodo(value);
             reset();
             
         }}>
            
            <TextField 
                value={value} 
                onChange={handleChange} 
                margin="normal" 
                label="Add New To-do"
                fullWidth 
            />
            <Button 
                type="submit" 
                variant="outlined" 
                color="primary" 
                className={classes.btn} 
            >
                Add
            </Button>
            
         </form>
            
        </Paper>
    )
}

export default withStyles(styles) (TodoForm);
